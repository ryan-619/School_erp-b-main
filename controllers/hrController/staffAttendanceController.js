import { crudFactory } from '../../utils/crudFactory.js';
import { staffAttendanceSchema } from '../../models/hrModels/hrModel.js';

const ctrl = crudFactory(staffAttendanceSchema, 'StaffAttendance');

export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;
