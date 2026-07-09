import { crudFactory } from '../../utils/crudFactory.js';
import { subjectSchema } from '../../models/academicModels/classModel.js';

const ctrl = crudFactory(subjectSchema, 'Subject');

export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;
