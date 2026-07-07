import VideoTutorialModel
from '../../models/downloadModels/videoTutorialModel.js';


export const getAllVideo=(req,res)=>{

VideoTutorialModel.getAll((err,result)=>{

if(err){

return res.status(500).json(err);

}

res.json(result);

});

};


export const getVideoById=(req,res)=>{

VideoTutorialModel.getById(
req.params.id,
(err,result)=>{

if(err){

return res.status(500).json(err);

}

res.json(result);

});

};


export const createVideo=(req,res)=>{

VideoTutorialModel.create(
req.body,
(err,result)=>{

if(err){

return res.status(500).json(err);

}

res.json({

message:'Video Added',
result

});

});

};


export const updateVideo=(req,res)=>{

VideoTutorialModel.update(
req.params.id,
req.body,
(err)=>{

if(err){

return res.status(500).json(err);

}

res.json({

message:'Updated'

});

});

};


export const deleteVideo=(req,res)=>{

VideoTutorialModel.delete(
req.params.id,
(err)=>{

if(err){

return res.status(500).json(err);

}

res.json({

message:'Deleted'

});

});

};