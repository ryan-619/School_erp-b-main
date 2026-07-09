import { crudFactory } from '../../utils/crudFactory.js';
import { marksGradeSchema } from '../../models/examinationModels/examinationModel.js';

const ctrl = crudFactory(marksGradeSchema, 'MarksGrade');

export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;
