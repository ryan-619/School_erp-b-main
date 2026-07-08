import mongoose from 'mongoose';

export const incomeHeadSchema = new mongoose.Schema({
  income_head_name: { type: String, required: true },
}, { timestamps: true });

export const incomeSchema = new mongoose.Schema({
  income_head_id: { type: mongoose.Schema.Types.ObjectId, ref: 'IncomeHead' },
  amount: Number,
  date: Date,
  note: String,
}, { timestamps: true });