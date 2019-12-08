require('dotenv').config()
const express      = require('express')
const app = express()

require('./configs/locals.config')(app)
require('./configs/debugger.config')
require('./configs/mongoose.config')
require('./configs/middlewares.config')(app)
require('./configs/passport.config')(app)
require('./configs/view-engines.config')(app)

// Routes
app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))
      
module.exports = app;
