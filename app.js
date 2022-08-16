// Third Party Software
import express from "express";
const app = express();
const port = 3000;

// First Party Software
import connection from './db.js'
import router from './src/router/pageRouter.js';

// DB Bağlantısı
connection();

// Template Engine Middleware
app.set('view engine', 'ejs');
app.set('views', 'src/views');

//Static Files Middleware
app.use(express.static('src/public'));

// Routes
app.use('/', router);

app.listen(port, () => console.log("http://localhost:3000/"));