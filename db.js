import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
// Veritabanı Bağlantısı

const connection = async () => {
    await mongoose.connect(process.env.DB_CONN).then(res => console.log("DB Bağlantı Başarılı"))
        .catch(err => console.log("DB Bağlantı Kurulamadı", err));
}


export default connection;