import Photo from '../model/photoModel.js';

const createPhoto = async (req, res) => {
    try {
        const photo = await Photo.create(req.body);
        res.status(201).json({
            succeded: true,
            photo
        });
    } catch (error) {
        res.status(500).json({
            succeded: false,
            error,
            message: "Couldn't create photo models"
        })
    }
};

const getAllPhotos = async (req, res) => {
    try {
        const photos = await Photo.find();
        res.status(201).render('photos', { photos, name: "photo" });
    } catch (error) {
        res.status(500).json({
            succeded: false,
            error
        })
    }
}

const getOnePhotos = async (req, res) => {
    try {
        const photo = await Photo.find({ _id: req.params.id });
        console.log(photo);
        res.status(201).render('photo', { photo, name: "photo" });
    } catch (error) {
        res.status(500).json({
            succeded: false,
            error
        })
    }
}


export { createPhoto, getAllPhotos, getOnePhotos };