import LeaveTypeModel from '../../models/hrModels/leaveTypeModel.js';

export const getAllLeaveType=(req,res)=>{

LeaveTypeModel.getAll((err,result)=>{

if(err) return res.status(500).json(err);

res.json(result);

});

};

export const createLeaveType=(req,res)=>{

LeaveTypeModel.create(req.body,(err)=>{

if(err) return res.status(500).json(err);

res.json({
message:'Leave Type Added'
});

});

};

export const updateLeaveType=(req,res)=>{

LeaveTypeModel.update(
req.params.id,
req.body,
(err)=>{

if(err) return res.status(500).json(err);

res.json({
message:'Updated'
});

});

};

export const deleteLeaveType=(req,res)=>{

LeaveTypeModel.delete(
req.params.id,
(err)=>{

if(err) return res.status(500).json(err);

res.json({
message:'Deleted'
});

});

};