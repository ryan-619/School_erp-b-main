import { crudFactory } from '../../utils/crudFactory.js';
import { incomeSchema } from '../../models/incomeModels/incomeModel.js'

const ctrl = crudFactory(incomeSchema, 'Income');

export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;
