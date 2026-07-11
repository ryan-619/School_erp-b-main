import { crudFactory } from '../../utils/crudFactory.js';
import { feesReminderSchema } from '../../models/paymentModels/feesModel.js';

const ctrl = crudFactory(feesReminderSchema, 'FeesReminder');

export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;
