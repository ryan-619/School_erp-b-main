import { crudFactory } from '../../utils/crudFactory.js';
import { feesCarryForwardSchema } from '../../models/paymentModels/feesModel.js';

const ctrl = crudFactory(feesCarryForwardSchema, 'FeesCarryForward');

export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;
