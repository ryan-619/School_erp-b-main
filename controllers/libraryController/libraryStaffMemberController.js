import { crudFactory } from '../../utils/crudFactory.js';
import { libraryStaffSchema } from '../../models/libraryModels/libraryModel.js';

const ctrl = crudFactory(libraryStaffSchema, 'LibraryStaff');

export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;
