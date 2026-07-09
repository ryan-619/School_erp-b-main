import { crudFactory } from '../../utils/crudFactory.js';
import { studentIdCardDesignSchema } from '../../models/certificateModels/certificateModel.js';

const ctrl = crudFactory(studentIdCardDesignSchema, 'StudentIdCardDesign');

export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;
