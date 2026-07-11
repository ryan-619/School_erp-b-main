import { crudFactory } from '../../utils/crudFactory.js';
import { customFieldSchema } from '../../models/settingModels/settingModel.js';

const ctrl = crudFactory(customFieldSchema, 'CustomField');

export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;
