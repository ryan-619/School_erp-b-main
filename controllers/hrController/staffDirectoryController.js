import StaffDirectoryModel from '../../models/hrModels/staffDirectoryModel.js';

export const getAllStaff=(req,res)=>{

 StaffDirectoryModel.getAll((err,result)=>{

 if(err)
 return res.status(500).json(err);

 res.json(result);

 });

};

export const createStaff=(req,res)=>{

 StaffDirectoryModel.create(
 req.body,
 (err,result)=>{

 if(err)
 return res.status(500).json(err);

 res.json({
 message:'Staff Added',
 result
 });

 });

};

export const updateStaff=(req,res)=>{

 StaffDirectoryModel.update(
 req.params.id,
 req.body,
 (err)=>{

 if(err)
 return res.status(500).json(err);

 res.json({
 message:'Staff Updated'
 });

 });

};

export const deleteStaff=(req,res)=>{

 StaffDirectoryModel.delete(
 req.params.id,
 (err)=>{

 if(err)
 return res.status(500).json(err);

 res.json({
 message:'Staff Deleted'
 });

 });

};