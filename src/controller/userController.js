import User from '../model/userModel.js';
import bcrypt from 'bcrypt';
const createUser = async (req, res) => {
    try {
        let { password } = req.body;
        // Password is hashed
        await bcrypt.hash(password, 10, async (err, hash) => {

            req.body = ({ ...req.body, password: hash })

            await User.create(req.body).then(_ => {
                res.status(201).redirect('/');
            }).catch(err => {
                res.status(400).json({
                    succeed: false,
                    err
                })
            })
        });
    } catch (err) {
        res.status(400).json({
            succeed: false,
            err
        })
    }
}

const findUser = (req, res) => {
    try {
        console.log(req.body);
    } catch (err) {
        res.status(400).json({
            succeed: false,
            err
        })
    }
}

export {
    createUser,
    findUser
}