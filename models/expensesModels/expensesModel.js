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

export const expenseHeadSchema = new mongoose.Schema({
  expense_head_name: { type: String, required: true },
}, { timestamps: true });

export const expenseSchema = new mongoose.Schema({
  expense_head_id: { type: mongoose.Schema.Types.ObjectId, ref: 'ExpenseHead' },
  amount: Number,
  date: Date,
  note: String,
}, { timestamps: true });

