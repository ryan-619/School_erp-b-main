import SyllabusStatusModel from '../../models/lessionModels/syllabusStatusModel.js';

export const getAllStatus=(req,res)=>{

SyllabusStatusModel.getAll((err,result)=>{

if(err)
return res.status(500).json(err);

res.json(result);

});

};

export const createStatus=(req,res)=>{

SyllabusStatusModel.create(
req.body,
(err)=>{

if(err)
return res.status(500).json(err);

res.json({
message:'Status Added'
});

});

};

export const updateStatus=(req,res)=>{

SyllabusStatusModel.update(
req.params.id,
req.body,
(err)=>{

if(err)
return res.status(500).json(err);

res.json({
message:'Updated'
});

});

};

export const deleteStatus=(req,res)=>{

SyllabusStatusModel.delete(
req.params.id,
(err)=>{

if(err)
return res.status(500).json(err);

res.json({
message:'Deleted'
});

});

};