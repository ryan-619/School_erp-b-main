import { crudFactory } from '../../utils/crudFactory.js';
import { studentHouseSchema } from '../../models/studentInformationModels/studentModel.js';

const ctrl = crudFactory(studentHouseSchema, 'StudentHouse');

export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;
