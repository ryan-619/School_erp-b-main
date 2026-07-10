import { crudFactory } from '../../utils/crudFactory.js';
import { setupFrontOfficeSchema } from '../../models/officeModels/officeModel.js';

const ctrl = crudFactory(setupFrontOfficeSchema, 'SetupFrontOffice');

export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;
