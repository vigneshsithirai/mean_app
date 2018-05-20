var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports.register = function (req, res) {

    var user = new User();

    user.name = req.body.name;
    user.email = req.body.email;

    User.findOne({ email: user.email }, function (err, userData) {
        if (userData && userData !== null) {
            res.status(409);
            res.json({ 'reason': 'User already registered' })
        } else {

            user.setPassword(req.body.password);

            user.save(function (err, data) {
                var token;
                token = user.generateJwt();
                res.status(200);
                res.json({
                    "user": token
                });
            });
        }
    });
};
module.exports.login = function (req, res) {

    passport.authenticate('local', function (err, user, info) {
        var token;

        // If Passport throws/catches an error
        if (err) {
            res.status(404).json(err);
            return;
        }

        // If a user is found
        if (user) {
            token = user.generateJwt();
            res.status(200);
            res.json({
                "token": token
            });
        } else {
            // If user is not found
            res.status(401).json(info);
        }
    })(req, res);

};