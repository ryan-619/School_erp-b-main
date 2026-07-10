import { crudFactory } from '../../utils/crudFactory.js';
import { departmentSchema } from '../../models/hrModels/hrModel.js';

const ctrl = crudFactory(departmentSchema, 'Department');

export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;
