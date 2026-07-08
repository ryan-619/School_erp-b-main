import mongoose from 'mongoose';

export const bookListSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: String,
  isbn: String,
  category: String,
  quantity: Number,
  available: Number,
  publisher: String,
}, { timestamps: true });

export const issueReturnSchema = new mongoose.Schema({
  book_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
  member_type: { type: String, enum: ['student', 'staff'] },
  member_id: mongoose.Schema.Types.ObjectId,
  issue_date: Date,
  return_date: Date,
  status: { type: String, enum: ['issued', 'returned'] },
}, { timestamps: true });

export const libraryStudentSchema = new mongoose.Schema({
  student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  membership_id: String,
  valid_till: Date,
}, { timestamps: true });

export const libraryStaffSchema = new mongoose.Schema({
  staff_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Staff' },
  membership_id: String,
  valid_till: Date,
}, { timestamps: true });
