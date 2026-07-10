import { crudFactory } from '../../utils/crudFactory.js';
import { hostelSchema } from '../../models/hostelModels/hostelModel.js';

const ctrl = crudFactory(hostelSchema, 'Hostel');

export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;
