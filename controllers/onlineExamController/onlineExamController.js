import OnlineExamModel from '../../models/onlineExmaModels/onlineExamModel.js';

export const getAllOnlineExam=(req,res)=>{

    OnlineExamModel.getAll((err,result)=>{

        if(err){

            return res.status(500).json(err);

        }

        res.json(result);

    });

};


export const getOnlineExamById=(req,res)=>{

    OnlineExamModel.getById(
        req.params.id,
        (err,result)=>{

        if(err){

            return res.status(500).json(err);

        }

        res.json(result);

    });

};


export const createOnlineExam=(req,res)=>{

    OnlineExamModel.create(
        req.body,
        (err,result)=>{

        if(err){

            return res.status(500).json(err);

        }

        res.json({

            message:"Online Exam Created Successfully",
            result

        });

    });

};


export const updateOnlineExam=(req,res)=>{

    OnlineExamModel.update(
        req.params.id,
        req.body,
        (err,result)=>{

        if(err){

            return res.status(500).json(err);

        }

        res.json({

            message:"Online Exam Updated"

        });

    });

};


export const deleteOnlineExam=(req,res)=>{

    OnlineExamModel.delete(
        req.params.id,
        (err,result)=>{

        if(err){

            return res.status(500).json(err);

        }

        res.json({

            message:"Online Exam Deleted"

        });

    });

};