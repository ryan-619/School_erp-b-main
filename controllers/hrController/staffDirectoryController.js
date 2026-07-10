import { crudFactory } from '../../utils/crudFactory.js';
import { staffSchema } from '../../models/hrModels/hrModel.js';

const ctrl = crudFactory(staffSchema, 'Staff');

export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;
