import { crudFactory } from '../../utils/crudFactory.js';
import { vehicleSchema } from '../../models/transportModels/transportModel.js';

const ctrl = crudFactory(vehicleSchema, 'Vehicle');

export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;
