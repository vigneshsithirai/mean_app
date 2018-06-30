var jsonwebtoken = require('jsonwebtoken');

(function () {
    'use strict';
    var getToken = function (headers) {
        if (headers && headers.authorization) {
            var authorization = headers.authorization;
            var part = authorization.split(' ');
            if (part.length === 2) {
                var token = part[1];
                return token;
            }
            else {
                return null;
            }
        }
        else {
            return null;
        }
    };
    exports.verifyToken = function (req, res, next) {
        var token = getToken(req.headers);
        if (token) {
            jsonwebtoken.verify(token, 'MY_SECRET', function (err, decode) {
                if (err) {
                    console.log('errr');
                    return res.status(401).send({ reason: 'Invalid Authentication Token' });
                } else {
                    console.log('insdide verification');
                    next();
                }
            })
        } else {
            return res.status(401).send({ reason: 'Invalid Authentication Token' });
        }
    }
}());