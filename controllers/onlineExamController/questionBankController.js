import QuestionBankModel from '../../models/onlineExmaModels/questionBankModel.js';

export const getAllQuestions=(req,res)=>{

    QuestionBankModel.getAll((err,result)=>{

        if(err){

            return res.status(500).json(err);

        }

        res.json(result);

    });

};


export const getQuestionById=(req,res)=>{

    QuestionBankModel.getById(
        req.params.id,
        (err,result)=>{

        if(err){

            return res.status(500).json(err);

        }

        res.json(result);

    });

};


export const createQuestion=(req,res)=>{

    QuestionBankModel.create(
        req.body,
        (err,result)=>{

        if(err){

            return res.status(500).json(err);

        }

        res.json({

            message:"Question Added Successfully",
            result

        });

    });

};


export const updateQuestion=(req,res)=>{

    QuestionBankModel.update(
        req.params.id,
        req.body,
        (err,result)=>{

        if(err){

            return res.status(500).json(err);

        }

        res.json({

            message:"Question Updated"

        });

    });

};


export const deleteQuestion=(req,res)=>{

    QuestionBankModel.delete(
        req.params.id,
        (err,result)=>{

        if(err){

            return res.status(500).json(err);

        }

        res.json({

            message:"Question Deleted"

        });

    });

};