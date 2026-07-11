import { crudFactory } from '../../utils/crudFactory.js';
import { routePickupPointSchema } from '../../models/transportModels/transportModel.js';

const ctrl = crudFactory(routePickupPointSchema, 'RoutePickupPoint');

export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;
