module.exports = function isLoggedIn(req, res, next) {
    console.log('is logged in', req.isAuthenticated());
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
};