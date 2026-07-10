import { crudFactory } from '../../utils/crudFactory.js';
import { leaveTypeSchema } from '../../models/hrModels/hrModel.js';

const ctrl = crudFactory(leaveTypeSchema, 'LeaveType');

export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;
