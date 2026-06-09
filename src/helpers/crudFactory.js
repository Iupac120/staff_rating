const createOne = (Model) => async(req,res,next) =>{
    try{
        const record = await Model.create(req.body)
        res.status(210).json({
            success:true,
            data:record
        })

    }catch(err){
        next(err)
    }
}

const getAll = (Model,include = []) => async(req,res,next) =>{
    try{
        const records = await Model.findAll({
            include
        })
        res.status(200).json({
            success:true,
            count:records.length,
            data:records
        })
    }catch(err){
        next(err)
    }
}

const getOne = (Model, include=[]) => async (req,res,next) =>{
    try{
        const record = await Model.findByPk(req.params.id,{include})
        if(!record){
            return res.status(404).json({
                success:false,
                message:"Record not found"
            })
        }
        res.status(200).json({
            success:true,
            data:record
        })
    }catch(err){
        next(err)
    }
}

const updateOne = (Model) => async(req,res,next) =>{
    try{
        const record = await Model.findByPk(req.params.id)
        if(!record){
            res.status(404).json({
                success:false,
                message:"Record not found"
            })
        } 
        await record.update(req.body)
        res.status(200).json({
            success:true,
            data:record
        })
    }catch(err){
        next(err)
    }
}

const deleteOne = (Model) => async(req,res,next) =>{
    try{
        const record = await Model.deleteOne(req.params.id)
        if(!record){
            res.status(404).json({
                success:false,
                message:"Record not found"
            })
        }
        res.status(200).json({
            success:true,
            message:"Record deleted successfully"
        })
    }catch(err){
        next(err)
    }
}

module.exports = {
    createOne,
    getAll,
    getOne,
    updateOne,
    deleteOne
}