import { crudFactory } from '../../utils/crudFactory.js';
import { itemStoreSchema } from '../../models/inventoryModels/inventoryModel.js';

const ctrl = crudFactory(itemStoreSchema, 'ItemStore');

export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;
