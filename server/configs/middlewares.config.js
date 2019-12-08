const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const logger       = require('morgan');
// aqui falta cors

module.exports= app => {
    // aqui va el whitelist de cors

    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());

}