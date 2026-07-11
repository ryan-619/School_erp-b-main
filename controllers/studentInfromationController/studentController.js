import { crudFactory } from '../../utils/crudFactory.js';
import { studentSchema } from '../../models/studentInformationModels/studentModel.js';

const ctrl = crudFactory(studentSchema, 'Student');

export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;
