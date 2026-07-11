import { crudFactory } from '../../utils/crudFactory.js';
import { fileTypeSchema } from '../../models/settingModels/settingModel.js';

const ctrl = crudFactory(fileTypeSchema, 'FileType');

export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;
