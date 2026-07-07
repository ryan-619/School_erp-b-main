import ContentTypeModel from '../../models/downloadModels/contentTypeModel.js';


export const getAllContentType=(req,res)=>{

ContentTypeModel.getAll((err,result)=>{

if(err){

return res.status(500).json({
success:false,
message:'Database Error',
error:err
});

}

res.status(200).json({
success:true,
count:result.length,
data:result
});

});

};



export const getContentTypeById=(req,res)=>{

ContentTypeModel.getById(
req.params.id,
(err,result)=>{

if(err){

return res.status(500).json(err);

}

res.json(result);

});

};



export const createContentType=(req,res)=>{

ContentTypeModel.create(
req.body,
(err,result)=>{

if(err){

return res.status(500).json(err);

}

res.status(201).json({

success:true,
message:'Content Type Added',
insertId:result.insertId

});

});

};



export const updateContentType=(req,res)=>{

ContentTypeModel.update(
req.params.id,
req.body,
(err)=>{

if(err){

return res.status(500).json(err);

}

res.json({

success:true,
message:'Content Type Updated'

});

});

};



export const deleteContentType=(req,res)=>{

ContentTypeModel.delete(
req.params.id,
(err)=>{

if(err){

return res.status(500).json(err);

}

res.json({

success:true,
message:'Content Type Deleted'

});

});

};