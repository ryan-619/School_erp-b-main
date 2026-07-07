import LessonModel from '../../models/lessionModels/lessonModel.js';

export const getAllLesson=(req,res)=>{

LessonModel.getAll((err,result)=>{

if(err)
return res.status(500).json(err);

res.json(result);

});

};

export const createLesson=(req,res)=>{

LessonModel.create(req.body,(err)=>{

if(err)
return res.status(500).json(err);

res.json({
message:'Lesson Added'
});

});

};

export const updateLesson=(req,res)=>{

LessonModel.update(
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

export const deleteLesson=(req,res)=>{

LessonModel.delete(
req.params.id,
(err)=>{

if(err)
return res.status(500).json(err);

res.json({
message:'Deleted'
});

});

};