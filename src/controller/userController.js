import User from '../model/userModel.js';
import bcrypt from 'bcrypt';
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
            res.status(200).json({
                succeed: true,
                message: "You are Log in"
            })
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

export {
    createUser,
    findUser
}