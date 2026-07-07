import TeachersRatingModel from '../../models/hrModels/teachersRatingModel.js';

export const getAllTeachersRating=(req,res)=>{

TeachersRatingModel.getAll((err,result)=>{

if(err){
return res.status(500).json(err);
}

res.json(result);

});

};

export const getTeachersRatingById=(req,res)=>{

TeachersRatingModel.getById(
req.params.id,
(err,result)=>{

if(err){
return res.status(500).json(err);
}

res.json(result);

});

};

export const createTeachersRating=(req,res)=>{

TeachersRatingModel.create(
req.body,
(err,result)=>{

if(err){
return res.status(500).json(err);
}

res.json({
message:'Teacher Rating Added',
result
});

});

};

export const updateTeachersRating=(req,res)=>{

TeachersRatingModel.update(
req.params.id,
req.body,
(err)=>{

if(err){
return res.status(500).json(err);
}

res.json({
message:'Teacher Rating Updated'
});

});

};

export const deleteTeachersRating=(req,res)=>{

TeachersRatingModel.delete(
req.params.id,
(err)=>{

if(err){
return res.status(500).json(err);
}

res.json({
message:'Teacher Rating Deleted'
});

});

};