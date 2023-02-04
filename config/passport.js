const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/user');

// passport.use(
//   new GoogleStrategy(
//     // Configuration object
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_SECRET,
//       callbackURL: process.env.GOOGLE_CALLBACK,
//     },
//     // The verify callback function
//     (accessToken, refreshToken, profile, cb) => {
//       // 1 with the id that comes from google.
//       // 2 we will use that to find the user in teh database.
//       User.findOne({ googleId: profile.id })
//         .then((user) => {
//           // IF the user exists, continue with that user in the cookie

//           if (user) {
//             return cb(null, user);
//           }
//           // ELSE we need to create the user, and then continue with that usr in the cookie

//           User.create({
//             name: profile.displayName,
//             googleId: profile.id,
//             email: profile.emails[0].value,
//             avatar: profile.photos[0].value,
//           })
//             .then((newUser) => cb(null, newUser))
//             .catch((err) => cb(err));
//         })
//         .catch((err) => cb(err));
//     }
//   )
// );

passport.use(new GoogleStrategy(
    // Configuration object
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK
    },
    // The verify callback function...
    // Marking a function as an async function allows us
    // to consume promises using the await keyword
    async function(accessToken, refreshToken, profile, cb) {
      // A user has logged in with OAuth...
      // Instead of using promise.then with a callback,
      // we can use the await keyword followed by the promise.
      // When that promise is fulfilled, it will return
      // whatever the promise's resolved value is.
      let user = await User.findOne({ googleId: profile.id });
      // Existing user found, so provide it to passport
      if (user) return cb(null, user);
      // We have a new user via OAuth!
      // When using async/await to consume promises,
      // there is no use of .then or .catch, so we
      // use a try/catch block to handle an error
      try {
        user = await User.create({
          name: profile.displayName,
          googleId: profile.id,
          email: profile.emails[0].value,
          avatar: profile.photos[0].value
        });
        return cb(null, user);
      } catch (err) {
        return cb(err);
      }
    }
  ));
  
  
  
    
// This is called when we serialize the user
passport.serializeUser((user, cb) => {
  cb(null, user._id);
});
// This is called when we deserialize the user
passport.deserializeUser((userId, cb) => {
  User.findById(userId)
    .then((currentUser) => {
      cb(null, currentUser);
    })
    .catch((err) => cb(err));
});