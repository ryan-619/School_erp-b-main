import TopicModel from '../../models/lessionModels/topicModel.js';

export const getAllTopic=(req,res)=>{

TopicModel.getAll((err,result)=>{

if(err)
return res.status(500).json(err);

res.json(result);

});

};

export const createTopic=(req,res)=>{

TopicModel.create(req.body,(err)=>{

if(err)
return res.status(500).json(err);

res.json({
message:'Topic Added'
});

});

};

export const updateTopic=(req,res)=>{

TopicModel.update(
req.params.id,
req.body,
(err)=>{

if(err)
return res.status(500).json(err);

res.json({
message:'Topic Updated'
});

});

};

export const deleteTopic=(req,res)=>{

TopicModel.delete(
req.params.id,
(err)=>{

if(err)
return res.status(500).json(err);

res.json({
message:'Deleted'
});

});

};