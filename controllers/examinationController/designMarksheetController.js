import { crudFactory } from '../../utils/crudFactory.js';
import { designMarksheetSchema } from '../../models/examinationModels/examinationModel.js';

const ctrl = crudFactory(designMarksheetSchema, 'DesignMarksheet');

export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;
