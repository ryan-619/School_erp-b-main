import ApproveLeaveRequestModel from '../../models/hrModels/approveLeaveRequestModel.js';

export const getLeaveRequests=(req,res)=>{

 ApproveLeaveRequestModel.getAll((err,result)=>{

 if(err) return res.status(500).json(err);

 res.json(result);

 });

};

export const createLeaveRequest=(req,res)=>{

 ApproveLeaveRequestModel.create(
 req.body,
 (err,result)=>{

 if(err) return res.status(500).json(err);

 res.json({
 message:'Leave Request Added'
 });

 });

};

export const updateLeaveRequest=(req,res)=>{

 ApproveLeaveRequestModel.update(
 req.params.id,
 req.body,
 (err)=>{

 if(err) return res.status(500).json(err);

 res.json({
 message:'Leave Request Updated'
 });

 });

};

export const deleteLeaveRequest=(req,res)=>{

 ApproveLeaveRequestModel.delete(
 req.params.id,
 (err)=>{

 if(err) return res.status(500).json(err);

 res.json({
 message:'Deleted'
 });

 });

};