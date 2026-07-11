import { crudFactory } from '../../utils/crudFactory.js';
import { captchaSchema } from '../../models/settingModels/settingModel.js';

const ctrl = crudFactory(captchaSchema, 'Captcha');

export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;
