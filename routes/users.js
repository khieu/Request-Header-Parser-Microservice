var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
    var obj = {};
    // get ip address
    var ip = (req.headers && req.headers['x-forwarded-for'])
        || req.ip 
        || req._remoteAddress 
        || (req.connection && req.connection.remoteAddress);
    // get language 
    var lang = req.headers["accept-language"].split(',')[0];
    // get software
    var software = req.headers["user-agent"].match('[(](.*?)[)]')[1];
    obj.ipaddress = ip;
    obj.language = lang;
    obj.software = software;
    res.send(obj);
});

module.exports = router;
