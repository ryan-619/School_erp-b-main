import { crudFactory } from '../utils/crudFactory.js';
import mongoose from 'mongoose';

const collegeSchema = new mongoose.Schema({
  college_name: { type: String, required: true },
  college_code: { type: String, unique: true },
  type: String,
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
  address: String,
  phone: String,
  email: String,
}, { timestamps: true });

const ctrl = crudFactory(collegeSchema, 'College');

export const getAllColleges   = ctrl.getAll;
export const getCollegeById   = ctrl.getById;
export const createCollege    = ctrl.create;
export const updateCollege    = ctrl.update;
export const deleteCollege    = ctrl.delete;

export const getCollegeByCode = async (req, res) => {
  try {
    const db = req.tenant.db;
    let College;
    try { College = db.model('College'); } catch { College = db.model('College', collegeSchema); }
    const college = await College.findOne({ college_code: req.params.code });
    if (!college) return res.status(404).json({ success: false, message: 'College not found' });
    res.json({ success: true, data: college });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};
