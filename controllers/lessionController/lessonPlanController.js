import LessonPlanModel from '../../models/lessionModels/lessonPlanModel.js';

export const getAllPlan=(req,res)=>{

LessonPlanModel.getAll((err,result)=>{

if(err)
return res.status(500).json(err);

res.json(result);

});

};

export const createPlan=(req,res)=>{

LessonPlanModel.create(
req.body,
(err,result)=>{

if(err)
return res.status(500).json(err);

res.json({
message:'Lesson Plan Added'
});

});

};

export const updatePlan=(req,res)=>{

LessonPlanModel.update(
req.params.id,
req.body,
(err)=>{

if(err)
return res.status(500).json(err);

res.json({
message:'Lesson Updated'
});

});

};

export const deletePlan=(req,res)=>{

LessonPlanModel.delete(
req.params.id,
(err)=>{

if(err)
return res.status(500).json(err);

res.json({
message:'Deleted'
});

});

};