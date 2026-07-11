import { crudFactory } from '../../utils/crudFactory.js';
import { onlineAdmissionSchema } from '../../models/studentInformationModels/studentModel.js';

const ctrl = crudFactory(onlineAdmissionSchema, 'OnlineAdmission');

export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;
