const { logEvents } = require('./logger');

const errorHandler = async (err, req, res, next) => {
    logEvents(`${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`,'errLog. log')
    console.error(err.stack);

    const status = res.statusCode ? res.statusCode : 500;

    res.status(status);

    res.json({
        error: {
            name: err.name,
            message: err.message,
            stack: err.stack
        }
    });
}

module.exports = { errorHandler };
