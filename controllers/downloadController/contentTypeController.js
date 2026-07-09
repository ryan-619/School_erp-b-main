import { crudFactory } from '../../utils/crudFactory.js';
import { contentTypeSchema } from '../../models/downloadModels/downloadModel.js';

const ctrl = crudFactory(contentTypeSchema, 'ContentType');

export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;
