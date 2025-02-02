/*
    Class Use only to resolve bad error message
    "extends" is used for inheritance
*/

class ErrorHandler extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode = statusCode
        
        // Read yourself about it (basically it capture my error)
        Error.captureStackTrace(this,this.constructor);
    }
}

module.exports=ErrorHandler;