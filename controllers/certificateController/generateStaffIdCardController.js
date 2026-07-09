import { crudFactory } from '../../utils/crudFactory.js';
import { generateStaffIdCardSchema } from '../../models/certificateModels/certificateModel.js';

const ctrl = crudFactory(generateStaffIdCardSchema, 'GenerateStaffIdCard');

export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;
