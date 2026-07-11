import { crudFactory } from '../../utils/crudFactory.js';
import { pickupPointSchema } from '../../models/transportModels/transportModel.js';

const ctrl = crudFactory(pickupPointSchema, 'PickupPoint');

export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;
