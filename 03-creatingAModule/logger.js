// Modules
// • A Module is a set of functions you want to include in your application.
// • Every file in node application is considered as module.

var url = 'http://mylogger.io/log';

function log(message) {
    // Send an HTTP request.
    console.log(message);
}

module.exports.log = log;
// module.exports.endPoint = url;