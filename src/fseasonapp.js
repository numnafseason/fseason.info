const path = require('path');
const express = require('express'); 
const app = express();
 
const blogRoute = require('./routes/blogRoute'); 
const apiRoute = require('./routes/apiRoute')

// Activate EJS view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true })); // Parse incoming request bodies
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files (e.g. CSS files)
app.use(express.static(path.join(__dirname, 'build'))); // Serve static files (e.g. CSS files)

app.use(blogRoute);
app.use(apiRoute);

app.use(function (error, req, res, next) {
    // Default error handling function
    // Will become active whenever any route / middleware crashes
    console.log(error);
    res.status(500).render('500');
});

const port = process.env.PORT || 3000
// node에서 직접 실행한 경우가 아니면 eport 
if (require.main === module) {
    app.listen(port, () => console.log(
        `Express started on http://localhost:${port}; ` +
        `press Ctrl-C to terminate.`))
} else {
    module.exports = app;
}