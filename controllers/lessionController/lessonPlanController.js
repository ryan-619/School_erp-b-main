import { crudFactory } from '../../utils/crudFactory.js';
import { lessonPlanSchema } from '../../models/lessonModels/lessonModel.js';

const ctrl = crudFactory(lessonPlanSchema, 'LessonPlan');

export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;
