import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { getCentralDB } from '../config/centralDB.js';
import { adminSchema } from '../models/centralModels.js';
import { staffSchema } from '../models/hrModels/hrModel.js';
import { studentSchema } from '../models/studentInformationModels/studentModel.js';

const JWT_SECRET    = process.env.JWT_SECRET;
const BCRYPT_ROUNDS = Number(process.env.BCRYPT_ROUNDS);

const sign   = (payload) => jwt.sign(payload, JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
const cookie = (res, name, token) => res.cookie(name, token, {
  httpOnly: true, secure: process.env.NODE_ENV === 'production',
  sameSite: 'Strict', maxAge: 7 * 24 * 60 * 60 * 1000,
});

const getAdminModel   = ()   => { const db = getCentralDB(); try { return db.model('Admin'); }   catch { return db.model('Admin', adminSchema); } };
const getStaffModel   = (db) => { try { return db.model('Staff'); }   catch { return db.model('Staff', staffSchema); } };
const getStudentModel = (db) => { try { return db.model('Student'); } catch { return db.model('Student', studentSchema); } };

export const signupAdmin = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    if (!name || !email || !password)
      return res.status(400).json({ success: false, message: 'name, email, password required' });
    const Admin = getAdminModel();
    if (await Admin.findOne({ email: email.toLowerCase() }))
      return res.status(409).json({ success: false, message: 'Email already exists' });
    const hashed = await bcrypt.hash(password, BCRYPT_ROUNDS);
    const admin  = await Admin.create({ name, email: email.toLowerCase(), password: hashed, phone });
    const token  = sign({ id: admin._id, email: admin.email, role: 'admin' });
    cookie(res, 'adminToken', token);
    res.status(201).json({ success: true, data: { id: admin._id, name: admin.name, email: admin.email, role: 'admin', token } });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};

export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ success: false, message: 'Email and password required' });
    const Admin = getAdminModel();
    const admin = await Admin.findOne({ email: email.toLowerCase() });
    if (!admin || !(await bcrypt.compare(password, admin.password)))
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    const token = sign({ id: admin._id, email: admin.email, role: 'admin' });
    cookie(res, 'adminToken', token);
    res.json({ success: true, data: { id: admin._id, name: admin.name, email: admin.email, role: 'admin', token } });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};

export const signupStaff = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    if (!name || !email || !password)
      return res.status(400).json({ success: false, message: 'name, email, password required' });
    const Staff = getStaffModel(req.tenant.db);
    if (await Staff.findOne({ email: email.toLowerCase() }))
      return res.status(409).json({ success: false, message: 'Email already exists' });
    const hashed = await bcrypt.hash(password, BCRYPT_ROUNDS);
    const staff  = await Staff.create({ name, email: email.toLowerCase(), password: hashed, phone });
    const token  = sign({ id: staff._id, email: staff.email, role: 'staff', schoolId: req.tenant.id });
    cookie(res, 'staffToken', token);
    res.status(201).json({ success: true, data: { id: staff._id, name: staff.name, email: staff.email, role: 'staff', token } });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};

export const loginStaff = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ success: false, message: 'Email and password required' });
    const Staff = getStaffModel(req.tenant.db);
    const staff = await Staff.findOne({ email: email.toLowerCase() });
    if (!staff || !(await bcrypt.compare(password, staff.password)))
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    const token = sign({ id: staff._id, email: staff.email, role: 'staff', schoolId: req.tenant.id });
    cookie(res, 'staffToken', token);
    res.json({ success: true, data: { id: staff._id, name: staff.name, email: staff.email, role: 'staff', token } });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};

export const signupStudent = async (req, res) => {
  try {
    const { first_name, last_name, email, password, phone } = req.body;
    if (!first_name || !email || !password)
      return res.status(400).json({ success: false, message: 'first_name, email, password required' });
    const Student = getStudentModel(req.tenant.db);
    if (await Student.findOne({ email: email.toLowerCase() }))
      return res.status(409).json({ success: false, message: 'Email already exists' });
    const hashed  = await bcrypt.hash(password, BCRYPT_ROUNDS);
    const student = await Student.create({ name: { first: first_name, last: last_name }, email: email.toLowerCase(), password: hashed, mobile: phone });
    const token   = sign({ id: student._id, email: student.email, role: 'student', schoolId: req.tenant.id });
    cookie(res, 'studentToken', token);
    res.status(201).json({ success: true, data: { id: student._id, name: student.name, email: student.email, role: 'student', token } });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};

export const loginStudent = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ success: false, message: 'Email and password required' });
    const Student = getStudentModel(req.tenant.db);
    const student = await Student.findOne({ email: email.toLowerCase() });
    if (!student || !(await bcrypt.compare(password, student.password)))
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    const token = sign({ id: student._id, email: student.email, role: 'student', schoolId: req.tenant.id });
    cookie(res, 'studentToken', token);
    res.json({ success: true, data: { id: student._id, name: student.name, email: student.email, role: 'student', token } });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};

export const signupParent = async (req, res) => {
  res.status(201).json({ success: true, message: 'Parent registered (extend with parent schema if needed)' });
};
export const loginParent = async (req, res) => {
  res.json({ success: true, message: 'Parent login (extend with parent schema if needed)' });
};
