import DepartmentModel from '../../models/hrModels/departmentModel.js';

export const getAllDepartment=(req,res)=>{

DepartmentModel.getAll((err,result)=>{

if(err){
return res.status(500).json(err);
}

res.json(result);

});

};

export const getDepartmentById=(req,res)=>{

DepartmentModel.getById(
req.params.id,
(err,result)=>{

if(err){
return res.status(500).json(err);
}

res.json(result);

});

};

export const createDepartment=(req,res)=>{

DepartmentModel.create(
req.body,
(err,result)=>{

if(err){
return res.status(500).json(err);
}

res.json({
message:'Department Added',
result
});

});

};

export const updateDepartment=(req,res)=>{

DepartmentModel.update(
req.params.id,
req.body,
(err)=>{

if(err){
return res.status(500).json(err);
}

res.json({
message:'Department Updated'
});

});

};

export const deleteDepartment=(req,res)=>{

DepartmentModel.delete(
req.params.id,
(err)=>{

if(err){
return res.status(500).json(err);
}

res.json({
message:'Department Deleted'
});

});

};