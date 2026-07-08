import mongoose from 'mongoose';

export const feesTypeSchema = new mongoose.Schema({
  fees_type_name: { type: String, required: true },
}, { timestamps: true });

export const feesGroupSchema = new mongoose.Schema({
  fees_group_name: { type: String, required: true },
  fees_group_type: String,
}, { timestamps: true });

export const feesMasterSchema = new mongoose.Schema({
  fees_group_id: { type: mongoose.Schema.Types.ObjectId, ref: 'FeesGroup' },
  class_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
  amount: Number,
  due_date: Date,
  session: String,
}, { timestamps: true });

export const collectFeesSchema = new mongoose.Schema({
  student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  fees_master_id: { type: mongoose.Schema.Types.ObjectId, ref: 'FeesMaster' },
  amount: Number,
  payment_date: Date,
  payment_mode: { type: String, enum: ['cash', 'online', 'cheque', 'bank'] },
  transaction_id: String,
  receipt_no: String,
}, { timestamps: true });

export const feesDiscountSchema = new mongoose.Schema({
  student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  discount_percent: Number,
  discount_amount: Number,
  reason: String,
}, { timestamps: true });

export const feesCarryForwardSchema = new mongoose.Schema({
  student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  old_session: String,
  amount: Number,
  reason: String,
}, { timestamps: true });

export const feesReminderSchema = new mongoose.Schema({
  template: String,
  trigger_days_before: Number,
}, { timestamps: true });

export const offlineBankPaymentSchema = new mongoose.Schema({
  student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  amount: Number,
  bank_name: String,
  reference: String,
  date: Date,
}, { timestamps: true });

