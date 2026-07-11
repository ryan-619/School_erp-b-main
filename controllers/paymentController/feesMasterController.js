import { crudFactory } from '../../utils/crudFactory.js';
import { feesMasterSchema } from '../../models/paymentModels/feesModel.js';

const ctrl = crudFactory(feesMasterSchema, 'FeesMaster');

export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;
