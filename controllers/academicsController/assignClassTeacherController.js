import { crudFactory } from '../../utils/crudFactory.js';
import { assignClassTeacherSchema } from '../../models/academicModels/classModel.js';

const ctrl = crudFactory(assignClassTeacherSchema, 'AssignClassTeacher');

export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;
