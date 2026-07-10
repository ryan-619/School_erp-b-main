import { crudFactory } from '../../utils/crudFactory.js';
import { expenseSchema } from '../../models/expensesModels/expensesModel.js';

const ctrl = crudFactory(expenseSchema, 'Expense');

export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;
