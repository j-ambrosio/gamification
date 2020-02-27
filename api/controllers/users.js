const path = require('path');
const user = require('../models/users');

exports.index = function (req, res) {
    res.sendFile(path.resolve('views/users.html'));
};

exports.create = function (req, res) {
    var newuser = new user(req.body);
    console.log(req.body);
    newuser.save(function (err) {
            if(err) {
            res.status(400).send('Unable to save user to database');
        } else {
            res.redirect('/users/getuser');
        }
  });
               };

exports.list = function (req, res) {
        user.find({}).exec(function (err, users) {
                if (err) {
                        return res.send(500, err);
                }
                res.render('getuser', {
                        users: users
             });
        });
};
