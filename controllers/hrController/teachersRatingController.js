import { crudFactory } from '../../utils/crudFactory.js';
import { teachersRatingSchema } from '../../models/hrModels/hrModel.js';

const ctrl = crudFactory(teachersRatingSchema, 'TeachersRating');

export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;
