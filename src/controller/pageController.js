const getHomePage = (req, res) => {
    res.render('index');
}

const getAboutPage = (req, res) => {
    res.render('about', {pageName : "about"});
}

const getServicesPage = (req, res) => {
    res.render('services');
}

const getBlogPage = (req, res) => {
    res.render('blog');
}

const getGalleryPage = (req, res) => {
    res.render('gallery');
}

const getContactPage = (req, res) => {
    res.render('contact');
}

const getProjectsPage = (req, res) => {
    res.render('projects');
}

export {
    getHomePage,
    getAboutPage,
    getServicesPage,
    getBlogPage,
    getProjectsPage,
    getGalleryPage,
    getContactPage
};