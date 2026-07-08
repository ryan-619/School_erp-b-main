import mongoose from 'mongoose';

export const onlineExamSchema = new mongoose.Schema({
  exam_name: String,
  class_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
  subject_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject' },
  duration: Number,
  total_marks: Number,
  scheduled_at: Date,
}, { timestamps: true });

export const questionBankSchema = new mongoose.Schema({
  exam_id: { type: mongoose.Schema.Types.ObjectId, ref: 'OnlineExam' },
  question: String,
  option_a: String,
  option_b: String,
  option_c: String,
  option_d: String,
  correct_answer: { type: String, enum: ['a', 'b', 'c', 'd'] },
  marks: Number,
}, { timestamps: true });


