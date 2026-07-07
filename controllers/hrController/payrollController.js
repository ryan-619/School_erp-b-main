import PayrollModel from '../../models/hrModels/payrollModel.js';

export const getPayroll=(req,res)=>{

PayrollModel.getAll((err,result)=>{

if(err)
return res.status(500).json(err);

res.json(result);

});

};

export const createPayroll=(req,res)=>{

PayrollModel.create(
req.body,
(err)=>{

if(err)
return res.status(500).json(err);

res.json({
message:'Payroll Added'
});

});

};

export const updatePayroll=(req,res)=>{

PayrollModel.update(
req.params.id,
req.body,
(err)=>{

if(err)
return res.status(500).json(err);

res.json({
message:'Payroll Updated'
});

});

};

export const deletePayroll=(req,res)=>{

PayrollModel.delete(
req.params.id,
(err)=>{

if(err)
return res.status(500).json(err);

res.json({
message:'Payroll Deleted'
});

});

};