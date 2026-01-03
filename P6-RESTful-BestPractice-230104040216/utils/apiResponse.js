exports.successResponse = (res, message, data) => res.json({ success : true, message, data });
exports.errorResponse = (res, message, Code = 400,errors = []) => 
    res.status(Code).json({ success : false, message, errors });