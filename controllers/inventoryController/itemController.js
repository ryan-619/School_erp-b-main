import { crudFactory } from '../../utils/crudFactory.js';
import { itemSchema } from '../../models/inventoryModels/inventoryModel.js';

const ctrl = crudFactory(itemSchema, 'Item');

export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;
