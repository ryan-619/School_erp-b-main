import mongoose from 'mongoose';

export const examGroupSchema = new mongoose.Schema({
  exam_name: { type: String, required: true },
  session: String,
}, { timestamps: true });

export const examScheduleSchema = new mongoose.Schema({
  exam_group_id: { type: mongoose.Schema.Types.ObjectId, ref: 'ExamGroup' },
  subject_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject' },
  class_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
  date: Date,
  start_time: String,
  end_time: String,
  room: String,
}, { timestamps: true });

export const examResultSchema = new mongoose.Schema({
  exam_group_id: { type: mongoose.Schema.Types.ObjectId, ref: 'ExamGroup' },
  student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  subject_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject' },
  marks_obtained: Number,
  total_marks: Number,
}, { timestamps: true });

export const marksGradeSchema = new mongoose.Schema({
  grade_name: String,
  percent_from: Number,
  percent_to: Number,
  grade_point: Number,
}, { timestamps: true });

export const marksDivisionSchema = new mongoose.Schema({
  division_name: String,
  percent_from: Number,
  percent_to: Number,
}, { timestamps: true });

export const designMarksheetSchema = new mongoose.Schema({
  header: String,
  footer: String,
  school_logo: String,
  signature: String,
  template_config: mongoose.Schema.Types.Mixed,
}, { timestamps: true });

export const designAdmitCardSchema = new mongoose.Schema({
  header: String,
  school_logo: String,
  template_config: mongoose.Schema.Types.Mixed,
}, { timestamps: true });

