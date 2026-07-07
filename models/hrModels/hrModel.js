import mongoose from 'mongoose';

export const departmentSchema = new mongoose.Schema({
  department_name: { type: String, required: true },
}, { timestamps: true });

export const designationSchema = new mongoose.Schema({
  designation_title: { type: String, required: true },
}, { timestamps: true });

export const staffSchema = new mongoose.Schema({
  employee_id: String,
  name: { type: String, required: true },
  email: { type: String, lowercase: true },
  password: String,
  phone: String,
  department_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
  designation_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Designation' },
  joining_date: Date,
  salary: Number,
  role: { type: String, default: 'staff' },
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
}, { timestamps: true });

export const leaveTypeSchema = new mongoose.Schema({
  leave_type: String,
  days_allowed: Number,
}, { timestamps: true });

export const applyLeaveSchema = new mongoose.Schema({
  staff_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Staff' },
  leave_type_id: { type: mongoose.Schema.Types.ObjectId, ref: 'LeaveType' },
  from_date: Date,
  to_date: Date,
  reason: String,
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
}, { timestamps: true });

export const staffAttendanceSchema = new mongoose.Schema({
  staff_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Staff' },
  date: Date,
  in_time: String,
  out_time: String,
  status: { type: String, enum: ['present', 'absent', 'late', 'half-day'] },
}, { timestamps: true });

export const payrollSchema = new mongoose.Schema({
  staff_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Staff' },
  month: Number,
  year: Number,
  basic: Number,
  allowances: Number,
  deductions: Number,
  net: Number,
}, { timestamps: true });

export const teachersRatingSchema = new mongoose.Schema({
  teacher_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Staff' },
  rater_id: mongoose.Schema.Types.ObjectId,
  rating: Number,
  comments: String,
}, { timestamps: true });

export const disabledStaffSchema = new mongoose.Schema({
  staff_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Staff' },
  reason: String,
  date: Date,
}, { timestamps: true });

