import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PhotoPost = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    uploadedAt: {
        type: Date,
        default: Date.now
    }

});

const Photo = mongoose.model('Photos', PhotoPost);

export default Photo;