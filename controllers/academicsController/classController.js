import { crudFactory } from '../../utils/crudFactory.js';
import { classSchema } from '../../models/academicModels/classModel.js';

const ctrl = crudFactory(classSchema, 'Class');

export const getAllClasses   = ctrl.getAll;
export const getClassById   = ctrl.getById;
export const createClass    = ctrl.create;
export const updateClass    = ctrl.update;
export const deleteClass    = ctrl.delete;
