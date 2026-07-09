import { crudFactory } from '../../utils/crudFactory.js';
import { contentShareListSchema } from '../../models/downloadModels/downloadModel.js';

const ctrl = crudFactory(contentShareListSchema, 'ContentShareList');

export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;
