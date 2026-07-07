import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getCentralPool } from "../config/database.js";
import { 
  validateSuperAdmin, 
  createLoginDTO
} from "../models/superAdmin.model.js";

const JWT_SECRET = process.env.JWT_SECRET || "super_secret_key";
const BCRYPT_ROUNDS = 10;

// ✅ SIGNUP
export const signupSuperAdmin = async (req, res) => {
  try {
    const { email, password, confirmPassword, name, role } = req.body;

    // 🔍 Validation
    const validation = validateSuperAdmin({ email, password, name, role });
    
    if (!validation.isValid) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: validation.errors
      });
    }

    // Check password confirmation
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match"
      });
    }

    const db = getCentralPool();

    // Check if email already exists
    const [existingUsers] = await db.query(
      "SELECT id FROM superadmins WHERE email = ?",
      [email.toLowerCase()]
    );

    if (existingUsers.length > 0) {
      return res.status(409).json({
        success: false,
        message: "Email already registered"
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, BCRYPT_ROUNDS);

    // Create superadmin
    const [result] = await db.query(
      "INSERT INTO superadmins (email, password, name, role, status) VALUES (?, ?, ?, ?, 'active')",
      [email.toLowerCase(), hashedPassword, name.trim(), role || 'admin']
    );

    // Fetch created user
    const [newUsers] = await db.query(
      "SELECT id, email, password, name, role, status, created_at, updated_at FROM superadmins WHERE id = ?",
      [result.insertId]
    );

    const newUser = newUsers[0];

    // Create JWT
    const token = jwt.sign(
      { id: newUser.id, email: newUser.email, role: newUser.role },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    // Set cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    console.log(`✅ New superadmin created: ${email}`);

    return res.status(201).json({
      success: true,
      message: "Signup successful",
      data: createLoginDTO(newUser, token)
    });

  } catch (err) {
    console.error("❌ Signup Error:", err.message);
    return res.status(500).json({
      success: false,
      message: "Server error during signup",
      error: process.env.NODE_ENV === "development" ? err.message : undefined
    });
  }
};

// 🔐 LOGIN
export const loginSuperAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 🔍 Validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required"
      });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format"
      });
    }

    const db = getCentralPool();

    // Get user by email
    const [rows] = await db.query(
      "SELECT id, email, password, name, role, status, created_at, updated_at FROM superadmins WHERE email = ?",
      [email.toLowerCase()]
    );

    if (rows.length === 0) {
      console.warn(`⚠️ Login attempt - User not found: ${email}`);
      return res.status(401).json({
        success: false,
        message: "Invalid email or password"
      });
    }

    const user = rows[0];

    // Check if account is active
    if (user.status !== 'active') {
      console.warn(`⚠️ Login attempt - Account inactive: ${email}`);
      return res.status(401).json({
        success: false,
        message: "Account is inactive. Contact administrator."
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      console.warn(`⚠️ Login attempt - Wrong password: ${email}`);
      return res.status(401).json({
        success: false,
        message: "Invalid email or password"
      });
    }

    // Create JWT
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    // Set cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    console.log(`✅ Login successful: ${email}`);

    return res.status(200).json({
      success: true,
      message: "Login successful",
      data: createLoginDTO(user, token)
    });

  } catch (err) {
    console.error("❌ Login Error:", err.message);
    return res.status(500).json({
      success: false,
      message: "Server error during login",
      error: process.env.NODE_ENV === "development" ? err.message : undefined
    });
  }
};

// 🚪 LOGOUT
export const logoutSuperAdmin = (req, res) => {
  try {
    const { email } = req.user;
    
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict"
    });

    console.log(`✅ Logout successful: ${email}`);

    return res.status(200).json({
      success: true,
      message: "Logout successful",
      data: {
        loggedOut: true,
        timestamp: new Date()
      }
    });

  } catch (err) {
    console.error("❌ Logout Error:", err.message);
    return res.status(500).json({
      success: false,
      message: "Logout failed",
      error: process.env.NODE_ENV === "development" ? err.message : undefined
    });
  }
};
