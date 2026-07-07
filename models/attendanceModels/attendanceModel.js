import mongoose from 'mongoose';

export const studentAttendanceSchema = new mongoose.Schema({
  student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  attendance_date: { type: Date, required: true },
  status: { type: String, enum: ['present', 'absent', 'late', 'half-day'], required: true },
  class_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
  section: String,
}, { timestamps: true });

export const studentLeaveSchema = new mongoose.Schema({
  student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  from_date: Date,
  to_date: Date,
  reason: String,
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
}, { timestamps: true });


