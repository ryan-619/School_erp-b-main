import mongoose from 'mongoose';

export const homeworkSchema = new mongoose.Schema({
  class_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
  subject_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject' },
  homework_date: Date,
  submission_date: Date,
  description: String,
}, { timestamps: true });

export const dailyAssignmentSchema = new mongoose.Schema({
  student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  teacher_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Staff' },
  date: Date,
  task: String,
  status: String,
}, { timestamps: true });


