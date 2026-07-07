import DesignationModel from '../../models/hrModels/designationModel.js';

export const getAllDesignation=(req,res)=>{

DesignationModel.getAll((err,result)=>{

if(err){
return res.status(500).json(err);
}

res.json(result);

});

};

export const getDesignationById=(req,res)=>{

DesignationModel.getById(
req.params.id,
(err,result)=>{

if(err){
return res.status(500).json(err);
}

res.json(result);

});

};

export const createDesignation=(req,res)=>{

DesignationModel.create(
req.body,
(err,result)=>{

if(err){
return res.status(500).json(err);
}

res.json({
message:'Designation Added',
result
});

});

};

export const updateDesignation=(req,res)=>{

DesignationModel.update(
req.params.id,
req.body,
(err)=>{

if(err){
return res.status(500).json(err);
}

res.json({
message:'Designation Updated'
});

});

};

export const deleteDesignation=(req,res)=>{

DesignationModel.delete(
req.params.id,
(err)=>{

if(err){
return res.status(500).json(err);
}

res.json({
message:'Designation Deleted'
});

});

};