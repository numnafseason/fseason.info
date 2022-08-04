
const fortune = require('./fortune');

exports.home=(req, res) => res.render('home');
exports.about= (req, res) =>  res.render('about', { fortune: fortune.getFortune() });
// custom 404 page
exports.notFound=(req, res) => {
    //res.status(404)
    res.render('404')
}
// custom 500 page
/* eslint-disable no-unused-vars */
exports.serverError=(err, req, res, next) => {
    console.log(err.message)
    res.status(500)
    res.render('500')
}
/* eslint-enable no-unused-vars */