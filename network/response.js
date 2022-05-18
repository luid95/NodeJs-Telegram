
var resp = {};

resp.success = function (req, res, message, status) {
    res.status(status || 200).send({
        status: status,
        error: '',
        body: message
    });
}


resp.error = function (req, res, error, status) {
    res.status(status || 500).send({
        status: status,
        error: error,
        body: ''
    });
}

module.exports = resp;