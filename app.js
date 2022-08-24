// Third Party Software
import express from "express";
const app = express();
const port = 3000;

// First Party Software
import connection from './db.js'
import pageRoute from './src/router/pageRouter.js';
import photoRoute from './src/router/photoRouter.js';
import userRoute from './src/router/userRouter.js';

// DB Bağlantısı
connection();

// Body Parser Middleware
app.use(express.urlencoded());
app.use(express.json());

//Static Files Middleware
app.use(express.static('src/public'));

// Template Engine Middleware
app.set('view engine', 'ejs');
app.set('views', 'src/views');

// Routes
app.use('/', pageRoute);
app.use('/register', userRoute);
app.use('/photos', photoRoute);

app.listen(port, () => console.log("http://localhost:3000/"));