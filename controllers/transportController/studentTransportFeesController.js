import { crudFactory } from '../../utils/crudFactory.js';
import { studentTransportFeesSchema } from '../../models/transportModels/transportModel.js';

const ctrl = crudFactory(studentTransportFeesSchema, 'StudentTransportFees');

export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;
