// Third Party Software
import express from "express";


const app = express();
const port = 3000;


// Template Engine Middleware
app.set('view engine', 'ejs');
app.set('views', 'src/views')


//Static Files Middleware
app.use(express.static('src/public'));

// Routes
app.get("/", (req, res) => {
    res.render('index');
});

app.get("/about", (req, res) => {
    res.render('about');
});

app.get("/blog", (req, res) => {
    res.render('blog');
});

app.get("/contact", (req, res) => {
    res.render('contact');
})

app.get("/gallery", (req, res) => {
    res.render('gallery');
})

app.get("/projects", (req, res) => {
    res.render('projects');
})

app.get("/services", (req, res) => {
    res.render('services');
})

app.listen(port, () => console.log("http://localhost:3000/"));