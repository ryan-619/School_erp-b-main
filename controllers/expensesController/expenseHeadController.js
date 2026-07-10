import { crudFactory } from '../../utils/crudFactory.js';
import { expenseHeadSchema } from '../../models/expensesModels/expensesModel.js';

const ctrl = crudFactory(expenseHeadSchema, 'ExpenseHead');

export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;
