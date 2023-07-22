exports.sendSuccess=(res, statusCode=200, data)=>{
    res.status(statusCode).json({
        status: "Success",
        data
    })
}
exports.sendFailure=(res, statusCode=500, message)=>{
    res.status(statusCode).json({
        status: "Failure",
        message,
    })
}