const statusMessages ={
    '200': 'Done',
    '201': 'Created',
    '400': 'Invalid format',
    '500': 'Internal error',
    
}

var resp = {};

resp.success = function (req, res, message, status) {

    let statusCode = status;
    let statusMessage = message;

    if(!status){
        statusCode = 200;
    }
    if(!message){
        statusMessage = statusMessages[status];
    }

    res.status(statusCode).send({
        status: status,
        error: '',
        body: statusMessage
    });
}


resp.error = function (req, res, error, status, details) {
    console.error('[response error] ' + details);

    let statusCode = status;
    let statusMessage = details;

    if(!status){
        statusCode = 500;
    }
    if(!message){
        statusMessage = statusMessages[status];
    }
    
    res.status(statusCode).send({
        status: status,
        error: statusMessage,
        body: ''
    });
}

module.exports = resp;