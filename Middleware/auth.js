require('dotenv').config()


const requireAuth = (req, res, next) => {
    if (!req.session || !req.session.user) {
        return res.redirect('/'); 
    }
    next();
};


module.exports = requireAuth;