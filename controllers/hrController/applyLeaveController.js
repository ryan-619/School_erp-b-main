import ApplyLeaveModel from '../../models/hrModels/applyLeaveModel.js';

export const getAllApplyLeave=(req,res)=>{

ApplyLeaveModel.getAll((err,result)=>{

if(err)
return res.status(500).json(err);

res.json(result);

});

};

export const createApplyLeave=(req,res)=>{

ApplyLeaveModel.create(
req.body,
(err)=>{

if(err)
return res.status(500).json(err);

res.json({
message:'Leave Applied'
});

});

};

export const deleteApplyLeave=(req,res)=>{

ApplyLeaveModel.delete(
req.params.id,
(err)=>{

if(err)
return res.status(500).json(err);

res.json({
message:'Deleted'
});

});

};