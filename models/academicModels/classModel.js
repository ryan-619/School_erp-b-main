import mongoose from 'mongoose';

export const classSchema = new mongoose.Schema({
  class_name: { type: String, required: true },
}, { timestamps: true });

export const sectionSchema = new mongoose.Schema({
  section_name: { type: String, required: true },
  class_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
}, { timestamps: true });

export const subjectSchema = new mongoose.Schema({
  subject_name: { type: String, required: true },
  class_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
  subject_code: String,
}, { timestamps: true });

export const subjectGroupSchema = new mongoose.Schema({
  group_name: { type: String, required: true },
  subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subject' }],
}, { timestamps: true });

export const assignClassTeacherSchema = new mongoose.Schema({
  class_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
  section_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Section' },
  teacher_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Staff' },
}, { timestamps: true });

export const classTimetableSchema = new mongoose.Schema({
  class_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
  section_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Section' },
  subject_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject' },
  teacher_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Staff' },
  day: String,
  period: Number,
  start_time: String,
  end_time: String,
}, { timestamps: true });

export const promoteStudentsSchema = new mongoose.Schema({
  student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  from_class: String,
  to_class: String,
  session: String,
}, { timestamps: true });


