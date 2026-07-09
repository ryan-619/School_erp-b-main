import { crudFactory } from '../../utils/crudFactory.js';
import { studentCertificateSchema } from '../../models/certificateModels/certificateModel.js';

const ctrl = crudFactory(studentCertificateSchema, 'StudentCertificate');

export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;
