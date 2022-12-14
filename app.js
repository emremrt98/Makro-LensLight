// Third Party Software
import express from "express";
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser'

// First Party Software
import connection from './db.js'
import pageRoute from './src/router/pageRouter.js';
import photoRoute from './src/router/photoRouter.js';
import userRoute from './src/router/userRouter.js';
import {checkUser} from './src/middlewares/authMiddleware.js'
// DB Bağlantısı
connection();

// Body Parser Middleware
app.use(express.urlencoded());
app.use(express.json());
app.use(cookieParser());

//Static Files Middleware
app.use(express.static('src/public'));

// Template Engine Middleware
app.set('view engine', 'ejs');
app.set('views', 'src/views');

// Routes
app.get('*', checkUser);
app.use('/', pageRoute);
app.use('/user', userRoute);
app.use('/photos', photoRoute);

app.listen(process.env.PORT || 5000, () => console.log("http://localhost:3000/"));