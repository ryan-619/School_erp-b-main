import { crudFactory } from '../../utils/crudFactory.js';
import { uploadShareContentSchema } from '../../models/downloadModels/downloadModel.js';

const ctrl = crudFactory(uploadShareContentSchema, 'UploadShareContent');

export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;
