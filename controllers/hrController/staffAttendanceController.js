import StaffAttendanceModel from '../../models/hrModels/staffAttendanceModel.js';

export const getAttendance=(req,res)=>{

StaffAttendanceModel.getAll((err,result)=>{

if(err)
return res.status(500).json(err);

res.json(result);

});

};

export const createAttendance=(req,res)=>{

StaffAttendanceModel.create(
req.body,
(err)=>{

if(err)
return res.status(500).json(err);

res.json({
message:'Attendance Added'
});

});

};

export const updateAttendance=(req,res)=>{

StaffAttendanceModel.update(
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

export const deleteAttendance=(req,res)=>{

StaffAttendanceModel.delete(
req.params.id,
(err)=>{

if(err)
return res.status(500).json(err);

res.json({
message:'Deleted'
});

});

};