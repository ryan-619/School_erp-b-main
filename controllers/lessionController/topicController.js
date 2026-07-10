import { crudFactory } from '../../utils/crudFactory.js';
import { topicSchema } from '../../models/lessonModels/lessonModel.js';

const ctrl = crudFactory(topicSchema, 'Topic');

export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;
