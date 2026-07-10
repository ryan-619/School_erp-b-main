import { crudFactory } from '../../utils/crudFactory.js';
import { incomeHeadSchema } from '../../models/incomeModels/incomeModel.js'

const ctrl = crudFactory(incomeHeadSchema, 'IncomeHead');

export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;
