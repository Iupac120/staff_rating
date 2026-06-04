const errorHandler = (err,req,res,next) =>{
    console.error(err);
    let statusCode = err.statusCode || 500;
    let message = err.message || "Internal server error";
    if(err.name === "SequelizeValidationError"){
        statusCode = 400
        message = err.error.map(
            (e) => e.message
        )
    };
    if(err.name === "SequelizeUniqueConstraintError"){
        statusCode = 400;
        message = err.error.map(
            (e) => e.message
        )
    };
    if(err.name === "JsonWebTokenError"){
        statusCode = 401;
        message = "Invalid token"
    };
    if(err.name === "TokenExpiredError"){
        statusCode = 401;
        message = "Token expired"
    };
    res.status(statusCode).json({
        success:false,
        message,
        stack:process.env.NODE_ENV === 'development'? err.stack : undefined
    })
}

module.exports = errorHandler