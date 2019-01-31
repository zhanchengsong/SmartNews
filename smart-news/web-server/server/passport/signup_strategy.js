const mongoose = require('mongoose')
//var UserFile = require('../model/User'); // Interprete file
const User = mongoose.model('User');

const PassportLocalStrategy = require('passport-local').Strategy;

module.exports = new PassportLocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false,
    passReqToCallback: true
}, (req, email, password, done) => {

    const userData = {
        email: email.trim(),
        password: password.trim(),
    };

    const newUser = new User(userData);
    console.log(newUser);
    console.log("Saving user to databsae")
    newUser.save().then( function(document) {
        console.log('User saved' + document);
        done(null);
    }).catch(function(err) {
        console.log("Caught err");
        done(err);
    })

});
