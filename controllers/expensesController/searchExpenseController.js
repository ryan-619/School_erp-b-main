import { expenseSchema } from '../../models/expensesModels/expensesModel.js';

const getModel = (db) => { try { return db.model('Expense'); } catch { return db.model('Expense', expenseSchema); } };

const paginate = async (Model, filter, req, res) => {
  const page  = Math.max(1, parseInt(req.query.page)  || 1);
  const limit = Math.min(100, parseInt(req.query.limit) || 25);
  const skip  = (page - 1) * limit;
  const [total, data] = await Promise.all([
    Model.countDocuments(filter),
    Model.find(filter).populate('expense_head_id', 'expense_head_name').sort({ date: -1 }).skip(skip).limit(limit)
  ]);
  const totalPages = Math.ceil(total / limit);
  res.json({ success: true, data, pagination: { total, page, limit, totalPages, hasNextPage: page < totalPages, hasPrevPage: page > 1 } });
};

export const searchExpense = async (req, res) => {
  try {
    const Expense = getModel(req.tenant.db);
    const filter  = req.body.expense_head_id ? { expense_head_id: req.body.expense_head_id } : {};
    await paginate(Expense, filter, req, res);
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};

export const searchExpenseDateWise = async (req, res) => {
  try {
    const Expense = getModel(req.tenant.db);
    const { from_date, to_date } = req.body;
    const filter  = (from_date && to_date) ? { date: { $gte: new Date(from_date), $lte: new Date(to_date) } } : {};
    await paginate(Expense, filter, req, res);
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};
