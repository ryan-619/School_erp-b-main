import mongoose from 'mongoose';

export const lessonSchema = new mongoose.Schema({
  subject_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject' },
  class_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
  lesson_title: String,
  topic_count: Number,
}, { timestamps: true });

export const topicSchema = new mongoose.Schema({
  lesson_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' },
  topic_title: String,
  duration: String,
  description: String,
}, { timestamps: true });

export const lessonPlanSchema = new mongoose.Schema({
  teacher_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Staff' },
  subject_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject' },
  class_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
  date: Date,
  objectives: String,
  methodology: String,
}, { timestamps: true });

export const syllabusStatusSchema = new mongoose.Schema({
  lesson_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' },
  teacher_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Staff' },
  status: { type: String, enum: ['pending', 'completed'] },
  completed_date: Date,
}, { timestamps: true });

