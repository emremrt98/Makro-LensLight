// Third Party Software
import express from "express";
const app = express();
const port = 3000;

// First Party Software
import connection from './db.js'
import pageRoute from './src/router/pageRouter.js';
import photoRoute from './src/router/photoRouter.js';
// DB Bağlantısı
connection();

// Template Engine Middleware
app.set('view engine', 'ejs');
app.set('views', 'src/views');

//Static Files Middleware
app.use(express.static('src/public'));

// Routes
app.use('/', pageRoute);
app.use('/photos', photoRoute);

app.listen(port, () => console.log("http://localhost:3000/"));