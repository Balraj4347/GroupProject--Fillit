const ErrorHandler = require('../utils/errorhandler');
// const constructor = require('../utils/errorhandler');

module.exports = (err,req,res,next)=>{
    err.statusCode= err.statusCode || 500;
    err.message=err.message || "Internal Server Error";

    //Wrong MongoDb id({cast error} ----for length)
    if(err.name =="CastError"){
        const message=`Resource not found. Invalid: ${err.path} `;
        err =new ErrorHandler(message,400);
    }

    res.status(err.statusCode).json({
        success:false,
        message:err.message,
        // error: err.stack
        error: err,
    })
}