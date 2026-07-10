import { crudFactory } from '../../utils/crudFactory.js';
import { itemStockSchema } from '../../models/inventoryModels/inventoryModel.js';

const ctrl = crudFactory(itemStockSchema, 'ItemStock');

export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;
