import { crudFactory } from '../../utils/crudFactory.js';
import { admissionEnquirySchema } from '../../models/officeModels/officeModel.js';

const ctrl = crudFactory(admissionEnquirySchema, 'AdmissionEnquiry');

export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;
