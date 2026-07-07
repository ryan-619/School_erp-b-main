import CopyOldLessonsModel from '../../models/lessionModels/copyOldLessonsModel.js';

export const getAllCopied=(req,res)=>{

    CopyOldLessonsModel.getAll((err,result)=>{

        if(err) return res.status(500).json(err);

        res.json(result);

    });

}

export const createCopy=(req,res)=>{

    CopyOldLessonsModel.create(
        req.body,
        (err,result)=>{

        if(err) return res.status(500).json(err);

        res.json({
            message:'Lessons Copied',
            result
        });

    });

}

export const deleteCopy=(req,res)=>{

    CopyOldLessonsModel.delete(
        req.params.id,
        (err)=>{

        if(err) return res.status(500).json(err);

        res.json({
            message:'Deleted'
        });

    });

}