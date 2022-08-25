
import jwt from 'jsonwebtoken';

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

export { authenticateToken };