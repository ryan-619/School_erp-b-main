import { crudFactory } from '../../utils/crudFactory.js';
import { studentLeaveSchema } from '../../models/attendanceModels/attendanceModel.js';

const ctrl = crudFactory(studentLeaveSchema, 'StudentLeave');

export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;
