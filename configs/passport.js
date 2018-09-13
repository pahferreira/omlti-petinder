const passport = require('passport');
const jwtStrategy = require("passport-jwt").Strategy;
const jwtExtract = require("passport-jwt").ExtractJwt;
const secret = require('./keys').secretJWT;
const User = require('../models/User');

options = {};
options.secretOrKey = secret;
options.jwtFromRequest = jwtExtract.fromAuthHeaderAsBearerToken();

module.exports = passport => {
	passport.use(new jwtStrategy(options, (jwtPayload, done) => {
		User.findById(jwtPayload.id, (err, user) => {
			if (err) return done(err, false);
			if (user) {
				return done(null, user);
			}	else {
				return done(null, false);
			}
		});
	}));
}
