var path = require('path');

module.exports = function(app) {

    app.get('/css/style.css', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/css/style.css'));
    });

    app.get('/img/:name', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/img/'));
    });


    app.get('/home', function(req, res){

        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });

    app.get('/survey', function(req, res){
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });


    app.use(function(req, res){
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    })
}



