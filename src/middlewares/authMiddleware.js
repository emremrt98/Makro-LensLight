import User from '../model/userModel.js';
import jwt from 'jsonwebtoken';

const checkUser = async (req, res, next) => {
    const token = req.cookies.jsonwebtoken;

    if (token) {
        jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.locals.user = null;
                next();
            } else {
                const user = await User.findById(decodedToken.userID);
                res.locals.user = user;
                next();
            }
        })
    } else {
        res.locals.user = null;
        next();
    }
}

const authenticateToken = async (req, res, next) => {
    try {
        const token = req.cookies.jsonwebtoken;

        if (token) {
            jwt.verify(token, process.env.JWT_SECRET_KEY, (err) => {
                if (err) {
                    console.log(err.message);
                    res.redirect('/login');
                } else {
                    next();
                }
            })
        } else {
            res.redirect('/login')
        }


    } catch (err) {
        res.status(401).json({
            succeed: false,
            error: 'Not authorized'
        })
    }
};

export { authenticateToken, checkUser };