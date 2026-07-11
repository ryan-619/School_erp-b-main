import { crudFactory } from '../../utils/crudFactory.js';
import { questionBankSchema } from '../../models/onlineExamModels/onlineExamModel.js';

const ctrl = crudFactory(questionBankSchema, 'QuestionBank');

export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;
