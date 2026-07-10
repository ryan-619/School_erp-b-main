import { crudFactory } from '../../utils/crudFactory.js';
import { itemCategorySchema } from '../../models/inventoryModels/inventoryModel.js';

const ctrl = crudFactory(itemCategorySchema, 'ItemCategory');

export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;
