import User from '../model/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const createUser = async (req, res) => {
    try {
        let { password } = req.body;
        // Password is hashed
        await bcrypt.hash(password, 10, async (err, hash) => {

            req.body = ({ ...req.body, password: hash })

            await User.create(req.body).then(_ => {
                res.status(200).redirect('/login');
            }).catch(err => {
                res.status(401).json({
                    succeed: false,
                    err
                })
            })
        });
    } catch (err) {
        res.status(401).json({
            succeed: false,
            err
        })
    }
}

const findUser = async (req, res) => {
    try {
        const { mail, password } = req.body;
        const user = await User.findOne({ mail });
        let controller = false;
        if (user) {
            controller = await bcrypt.compare(password, user.password)
        } else {
            return res.status(401).json({
                succeed: false,
                error: "There is no such user",
            })
        }
        if (controller) {
            const token = createToken(user._id);
            res.cookie("jsonwebtoken", token, {
                httpOnly: true,
                maxAge: 1000 * 60 * 60 * 24
            })

            res.redirect('/user/dashboard');

        } else {
            res.status(401).json({
                succeed: false,
                message: "Password are not matched"
            })
        }
    } catch (err) {
        res.status(401).json({
            succeed: false,
            err,
            message: "Sorun çıkıyor kankam"
        })
    }
}

const getDashboardPage = (req, res) => {
    res.render('dashboard', { name: "dashboard" });
}

const createToken = (userID) => {
    return jwt.sign({ userID }, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });
}


export {
    createUser,
    findUser,
    getDashboardPage
}