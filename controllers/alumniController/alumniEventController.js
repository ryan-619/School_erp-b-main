import { crudFactory } from '../../utils/crudFactory.js';
import { alumniEventSchema } from '../../models/alumniModels/alumniModel.js';

const ctrl = crudFactory(alumniEventSchema, 'AlumniEvent');

export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;
