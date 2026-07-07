import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getTenantPool } from "../config/tenantDB.js";
import { getCentralPool } from "../config/database.js";
import {
  validateAdmin,
  validateStaff,
  validateStudent,
  validateParent,
  createLoginDTO
} from "../models/users.model.js";

const JWT_SECRET = process.env.JWT_SECRET || "super_secret_key";
const BCRYPT_ROUNDS = 10;

// ==================== ADMIN LOGIN/SIGNUP ====================

/**
 * Admin Signup
 */
export const signupAdmin = async (req, res) => {
  try {
    const { email, password, confirmPassword, name, phone } = req.body;

    // Validation
    const validation = validateAdmin({ email, password, name });
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

    // Check if email exists
    const [existingAdmins] = await db.query(
      "SELECT id FROM admins WHERE email = ?",
      [email.toLowerCase()]
    );

    if (existingAdmins.length > 0) {
      return res.status(409).json({
        success: false,
        message: "Email already registered"
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, BCRYPT_ROUNDS);

    // Create admin
    const [result] = await db.query(
      "INSERT INTO admins (email, password, name, phone, status) VALUES (?, ?, ?, ?, 'active')",
      [email.toLowerCase(), hashedPassword, name.trim(), phone || null]
    );

    // Fetch created admin
    const [newAdmins] = await db.query(
      "SELECT id, email, name, phone, status, created_at, updated_at FROM admins WHERE id = ?",
      [result.insertId]
    );

    const newAdmin = newAdmins[0];

    // Create JWT
    const token = jwt.sign(
      { id: newAdmin.id, email: newAdmin.email, type: 'admin' },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    // Set cookie
    res.cookie("adminToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    console.log(`✅ New admin created: ${email}`);

    return res.status(201).json({
      success: true,
      message: "Admin signup successful",
      data: createLoginDTO(newAdmin, token, 'admin')
    });

  } catch (err) {
    console.error("❌ Admin Signup Error:", err.message);
    console.error("Error details:", err);
    return res.status(500).json({
      success: false,
      message: "Server error during signup",
      error: process.env.NODE_ENV === "development" ? err.message : undefined
    });
  }
};

/**
 * Admin Login
 */
export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
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

    // Get admin by email
    const [rows] = await db.query(
      "SELECT id, email, password, name, phone, status, created_at, updated_at FROM admins WHERE email = ?",
      [email.toLowerCase()]
    );

    if (rows.length === 0) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password"
      });
    }

    const admin = rows[0];

    // Check if account is active
    if (admin.status !== 'active') {
      return res.status(401).json({
        success: false,
        message: "Account is inactive. Contact administrator."
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password"
      });
    }

    // Create JWT
    const token = jwt.sign(
      { id: admin.id, email: admin.email, type: 'admin' },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    // Set cookie
    res.cookie("adminToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    console.log(`✅ Admin logged in: ${email}`);

    return res.status(200).json({
      success: true,
      message: "Login successful",
      data: createLoginDTO(admin, token, 'admin')
    });

  } catch (err) {
    console.error("❌ Admin Login Error:", err.message);
    console.error("Error details:", err);
    return res.status(500).json({
      success: false,
      message: "Server error during login",
      error: process.env.NODE_ENV === "development" ? err.message : undefined
    });
  }
};

// ==================== STAFF LOGIN/SIGNUP ====================

/**
 * Staff Signup
 */
export const signupStaff = async (req, res) => {
  try {
    const { email, password, confirmPassword, name, phone, department, position, schoolId } = req.body;

    // Validation
    const validation = validateStaff({ email, password, name });
    if (!validation.isValid) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: validation.errors
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match"
      });
    }

    const tenantDb = await getTenantPool(schoolId);

    // Check if email exists
    const [existingStaff] = await tenantDb.query(
      "SELECT id FROM staff WHERE email = ?",
      [email.toLowerCase()]
    );

    if (existingStaff.length > 0) {
      return res.status(409).json({
        success: false,
        message: "Email already registered"
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, BCRYPT_ROUNDS);

    // Create staff
    const [result] = await tenantDb.query(
      "INSERT INTO staff (email, password, name, phone, department, position, status) VALUES (?, ?, ?, ?, ?, ?, 'active')",
      [email.toLowerCase(), hashedPassword, name.trim(), phone || null, department || null, position || null]
    );

    // Fetch created staff
    const [newStaff] = await tenantDb.query(
      "SELECT id, email, name, phone, department, position, status, created_at, updated_at FROM staff WHERE id = ?",
      [result.insertId]
    );

    const staff = newStaff[0];

    // Create JWT
    const token = jwt.sign(
      { id: staff.id, email: staff.email, type: 'staff', schoolId },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("staffToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    console.log(`✅ New staff created: ${email}`);

    return res.status(201).json({
      success: true,
      message: "Staff signup successful",
      data: createLoginDTO(staff, token, 'staff')
    });

  } catch (err) {
    console.error("❌ Staff Signup Error:", err.message);
    console.error("Error details:", err);
    return res.status(500).json({
      success: false,
      message: "Server error during signup",
      error: process.env.NODE_ENV === "development" ? err.message : undefined
    });
  }
};

/**
 * Staff Login
 */
export const loginStaff = async (req, res) => {
  try {
    const { email, password, schoolId } = req.body;

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

    const tenantDb = await getTenantPool(schoolId);

    // Get staff by email
    const [rows] = await tenantDb.query(
      "SELECT id, email, password, name, phone, department, position, status, created_at, updated_at FROM staff WHERE email = ?",
      [email.toLowerCase()]
    );

    if (rows.length === 0) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password"
      });
    }

    const staff = rows[0];

    if (staff.status !== 'active') {
      return res.status(401).json({
        success: false,
        message: "Account is inactive"
      });
    }

    const isMatch = await bcrypt.compare(password, staff.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password"
      });
    }

    const token = jwt.sign(
      { id: staff.id, email: staff.email, type: 'staff', schoolId },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("staffToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    console.log(`✅ Staff logged in: ${email}`);

    return res.status(200).json({
      success: true,
      message: "Login successful",
      data: createLoginDTO(staff, token, 'staff')
    });

  } catch (err) {
    console.error("❌ Staff Login Error:", err.message);
    console.error("Error details:", err);
    return res.status(500).json({
      success: false,
      message: "Server error during login",
      error: process.env.NODE_ENV === "development" ? err.message : undefined
    });
  }
};

// ==================== STUDENT LOGIN/SIGNUP ====================

/**
 * Student Signup
 */
export const signupStudent = async (req, res) => {
  try {
    const { email, password, confirmPassword, first_name, last_name, phone, class: studentClass, section, roll_number, schoolId } = req.body;

    // Validation
    const validation = validateStudent({ email, password, first_name, last_name });
    if (!validation.isValid) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: validation.errors
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match"
      });
    }

    const tenantDb = await getTenantPool(schoolId);

    // Check if email exists
    const [existingStudents] = await tenantDb.query(
      "SELECT id FROM students WHERE email = ?",
      [email.toLowerCase()]
    );

    if (existingStudents.length > 0) {
      return res.status(409).json({
        success: false,
        message: "Email already registered"
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, BCRYPT_ROUNDS);

    // Create student
    const [result] = await tenantDb.query(
      "INSERT INTO students (email, password, first_name, last_name, phone, class, section, roll_number, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'active')",
      [email.toLowerCase(), hashedPassword, first_name.trim(), last_name.trim(), phone || null, studentClass || null, section || null, roll_number || null]
    );

    // Fetch created student
    const [newStudents] = await tenantDb.query(
      "SELECT id, email, first_name, last_name, phone, class, section, roll_number, status, created_at, updated_at FROM students WHERE id = ?",
      [result.insertId]
    );

    const student = newStudents[0];

    // Create JWT
    const token = jwt.sign(
      { id: student.id, email: student.email, type: 'student', schoolId },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("studentToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    console.log(`✅ New student created: ${email}`);

    return res.status(201).json({
      success: true,
      message: "Student signup successful",
      data: createLoginDTO(student, token, 'student')
    });

  } catch (err) {
    console.error("❌ Student Signup Error:", err.message);
    console.error("Error details:", err);
    return res.status(500).json({
      success: false,
      message: "Server error during signup",
      error: process.env.NODE_ENV === "development" ? err.message : undefined
    });
  }
};

/**
 * Student Login
 */
export const loginStudent = async (req, res) => {
  try {
    const { email, password, schoolId } = req.body;

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

    const tenantDb = await getTenantPool(schoolId);

    // Get student by email
    const [rows] = await tenantDb.query(
      "SELECT id, email, password, first_name, last_name, phone, class, section, roll_number, status, created_at, updated_at FROM students WHERE email = ?",
      [email.toLowerCase()]
    );

    if (rows.length === 0) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password"
      });
    }

    const student = rows[0];

    if (student.status !== 'active') {
      return res.status(401).json({
        success: false,
        message: "Account is inactive"
      });
    }

    const isMatch = await bcrypt.compare(password, student.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password"
      });
    }

    const token = jwt.sign(
      { id: student.id, email: student.email, type: 'student', schoolId },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("studentToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    console.log(`✅ Student logged in: ${email}`);

    return res.status(200).json({
      success: true,
      message: "Login successful",
      data: createLoginDTO(student, token, 'student')
    });

  } catch (err) {
    console.error("❌ Student Login Error:", err.message);
    console.error("Error details:", err);
    return res.status(500).json({
      success: false,
      message: "Server error during login",
      error: process.env.NODE_ENV === "development" ? err.message : undefined
    });
  }
};

// ==================== PARENT LOGIN/SIGNUP ====================

/**
 * Parent Signup
 */
export const signupParent = async (req, res) => {
  try {
    const { email, password, confirmPassword, name, phone, relationship, student_id, schoolId } = req.body;

    // Validation
    const validation = validateParent({ email, password, name });
    if (!validation.isValid) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: validation.errors
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match"
      });
    }

    const tenantDb = await getTenantPool(schoolId);

    // Check if email exists
    const [existingParents] = await tenantDb.query(
      "SELECT id FROM parents WHERE email = ?",
      [email.toLowerCase()]
    );

    if (existingParents.length > 0) {
      return res.status(409).json({
        success: false,
        message: "Email already registered"
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, BCRYPT_ROUNDS);

    // Create parent
    const [result] = await tenantDb.query(
      "INSERT INTO parents (email, password, name, phone, relationship, student_id, status) VALUES (?, ?, ?, ?, ?, ?, 'active')",
      [email.toLowerCase(), hashedPassword, name.trim(), phone || null, relationship || null, student_id || null]
    );

    // Fetch created parent
    const [newParents] = await tenantDb.query(
      "SELECT id, email, name, phone, relationship, student_id, status, created_at, updated_at FROM parents WHERE id = ?",
      [result.insertId]
    );

    const parent = newParents[0];

    // Create JWT
    const token = jwt.sign(
      { id: parent.id, email: parent.email, type: 'parent', schoolId },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("parentToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    console.log(`✅ New parent created: ${email}`);

    return res.status(201).json({
      success: true,
      message: "Parent signup successful",
      data: createLoginDTO(parent, token, 'parent')
    });

  } catch (err) {
    console.error("❌ Parent Signup Error:", err.message);
    console.error("Error details:", err);
    return res.status(500).json({
      success: false,
      message: "Server error during signup",
      error: process.env.NODE_ENV === "development" ? err.message : undefined
    });
  }
};

/**
 * Parent Login
 */
export const loginParent = async (req, res) => {
  try {
    const { email, password, schoolId } = req.body;

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

    const tenantDb = await getTenantPool(schoolId);

    // Get parent by email
    const [rows] = await tenantDb.query(
      "SELECT id, email, password, name, phone, relationship, student_id, status, created_at, updated_at FROM parents WHERE email = ?",
      [email.toLowerCase()]
    );

    if (rows.length === 0) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password"
      });
    }

    const parent = rows[0];

    if (parent.status !== 'active') {
      return res.status(401).json({
        success: false,
        message: "Account is inactive"
      });
    }

    const isMatch = await bcrypt.compare(password, parent.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password"
      });
    }

    const token = jwt.sign(
      { id: parent.id, email: parent.email, type: 'parent', schoolId },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("parentToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    console.log(`✅ Parent logged in: ${email}`);

    return res.status(200).json({
      success: true,
      message: "Login successful",
      data: createLoginDTO(parent, token, 'parent')
    });

  } catch (err) {
    console.error("❌ Parent Login Error:", err.message);
    console.error("Error details:", err);
    return res.status(500).json({
      success: false,
      message: "Server error during login",
      error: process.env.NODE_ENV === "development" ? err.message : undefined
    });
  }
};
