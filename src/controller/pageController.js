const getHomePage = (req, res) => {
    res.render('index', { name: "index" });
}

const getAboutPage = (req, res) => {
    res.render('about', { name: "about" });
}

const getServicesPage = (req, res) => {
    res.render('services', { name: "services" });
}

const getBlogPage = (req, res) => {
    res.render('blog', { name: "blog" });
}

const getContactPage = (req, res) => {
    res.render('contact', { name: "contact" });
}

const getProjectsPage = (req, res) => {
    res.render('projects', { name: "projects" });
}

const getRegisterPage = (req, res) => {
    res.render('register', { name: "register" });
}
const getLoginPage = (req, res) => {
    res.render('login', { name: "login" });
}

export {
    getHomePage,
    getAboutPage,
    getServicesPage,
    getBlogPage,
    getProjectsPage,
    getContactPage,
    getRegisterPage,
    getLoginPage
};