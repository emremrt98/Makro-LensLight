import mongoose from "mongoose";

const Schema = mongoose.Schema;
import validator from "validator";
const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, "Username area is required"],
        trim: true,
        lowercase: true,
        validate: [validator.isAlphanumeric, "Only Alphanumeric characters"]
    },
    mail: {
        type: String,
        required: [true, "Email area is required"],
        trim: true,
        unique: true,
        validate: [validator.isEmail, "Valid email is required"]
    },
    password: {
        type: String,
        required: [true, "Password area is required"],
        trim: true,
        minLength: [4, "At least 4 characters"]

    }

}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

export default User;