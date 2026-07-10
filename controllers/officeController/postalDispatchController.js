import { crudFactory } from '../../utils/crudFactory.js';
import { postalDispatchSchema } from '../../models/officeModels/officeModel.js';

const ctrl = crudFactory(postalDispatchSchema, 'PostalDispatch');

export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;
