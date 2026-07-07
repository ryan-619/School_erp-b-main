import DisabledStaffModel from '../../models/hrModels/disabledStaffModel.js';

export const getAllDisabledStaff=(req,res)=>{

DisabledStaffModel.getAll((err,result)=>{

if(err){
return res.status(500).json(err);
}

res.json(result);

});

};

export const getDisabledStaffById=(req,res)=>{

DisabledStaffModel.getById(
req.params.id,
(err,result)=>{

if(err){
return res.status(500).json(err);
}

res.json(result);

});

};

export const createDisabledStaff=(req,res)=>{

DisabledStaffModel.create(
req.body,
(err,result)=>{

if(err){
return res.status(500).json(err);
}

res.json({
message:'Disabled Staff Added',
result
});

});

};

export const deleteDisabledStaff=(req,res)=>{

DisabledStaffModel.delete(
req.params.id,
(err)=>{

if(err){
return res.status(500).json(err);
}

res.json({
message:'Disabled Staff Deleted'
});

});

};