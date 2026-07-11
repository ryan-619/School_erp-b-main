import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { getCentralDB } from '../config/centralDB.js';
import { superAdminSchema } from '../models/centralModels.js';

const JWT_SECRET = process.env.JWT_SECRET;

const getSuperAdminModel = () => {
  const db = getCentralDB();
  try { return db.model('SuperAdmin'); }
  catch { return db.model('SuperAdmin', superAdminSchema); }
};

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      return res.status(400).json({ success: false, message: 'All fields required' });

    const SuperAdmin = getSuperAdminModel();
    const exists = await SuperAdmin.findOne({ email: email.toLowerCase() });
    if (exists) return res.status(409).json({ success: false, message: 'Email already exists' });

    const hashed = await bcrypt.hash(password, Number(process.env.BCRYPT_ROUNDS));
    const admin = await SuperAdmin.create({ name, email: email.toLowerCase(), password: hashed });

    const token = jwt.sign(
      { id: admin._id, email: admin.email, role: 'superadmin' },
      JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    res.cookie('token', token, {
      httpOnly: true, secure: process.env.NODE_ENV === 'production',
      sameSite: 'Strict', maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.status(201).json({ success: true, message: 'Superadmin created',
      data: { id: admin._id, name: admin.name, email: admin.email, role: 'superadmin', token } });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ success: false, message: 'Email and password required' });

    const SuperAdmin = getSuperAdminModel();
    const admin = await SuperAdmin.findOne({ email: email.toLowerCase() });
    if (!admin || admin.status !== 'active')
      return res.status(401).json({ success: false, message: 'Invalid credentials' });

    const match = await bcrypt.compare(password, admin.password);
    if (!match) return res.status(401).json({ success: false, message: 'Invalid credentials' });

    const token = jwt.sign(
      { id: admin._id, email: admin.email, role: 'superadmin' },
      JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    res.cookie('token', token, {
      httpOnly: true, secure: process.env.NODE_ENV === 'production',
      sameSite: 'Strict', maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.json({ success: true, message: 'Login successful',
      data: { id: admin._id, name: admin.name, email: admin.email, role: 'superadmin', token } });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const logout = (req, res) => {
  res.clearCookie('token');
  res.json({ success: true, message: 'Logged out' });
};
