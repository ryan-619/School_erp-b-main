import { crudFactory } from '../../utils/crudFactory.js';
import { postalReceiveSchema } from '../../models/officeModels/officeModel.js';

const ctrl = crudFactory(postalReceiveSchema, 'PostalReceive');

export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;
