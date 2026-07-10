import { crudFactory } from '../../utils/crudFactory.js';
import { menuSchema } from '../../models/frontCmsModels/frontCmsModel.js';

const ctrl = crudFactory(menuSchema, 'Menu');

export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;
