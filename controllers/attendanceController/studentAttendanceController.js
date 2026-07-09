import { crudFactory } from '../../utils/crudFactory.js';
import { studentAttendanceSchema } from '../../models/attendanceModels/attendanceModel.js';

const ctrl = crudFactory(studentAttendanceSchema, 'StudentAttendance');

export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;
