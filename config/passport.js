const mongoose= require('mongoose');
const passport= require('passport');
const LocalStrategy=require('passport-local');

// We have access to this how?
const Users= mongoose.model('Users');

passport.use(new LocalStrategy(
    {
    usernameField: 'user[email]',
    passwordField: 'user[password]',
    },
    (email, password, done)=>{
        Users.findOne({email})
        .then((user)=>{
            if(!user || !user.validatePassword(password)){
                /* validatePassword is a method of the User model,
                it takes the entered password as an argument */
                return done(null,false,{errors:{'email or password':'is invalid'}});
            }
            return done(null, user);
        })
        .catch(done)
    }
))