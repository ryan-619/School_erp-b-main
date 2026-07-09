import { crudFactory } from '../../utils/crudFactory.js';
import { sectionSchema } from '../../models/academicModels/classModel.js';

const ctrl = crudFactory(sectionSchema, 'Section');

export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;
