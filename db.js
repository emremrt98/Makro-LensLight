import mongoose from "mongoose";

// Veritabanı Bağlantısı

const connection = async () => {
    await mongoose.connect('mongodb://localhost/lenslight').then(res => console.log("DB Bağlantı Başarılı"))
        .catch(err => console.log("DB Bağlantı Kurulamadı", err));
}


export default connection;