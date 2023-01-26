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
app.use('/api', require('./routes/index'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/menu',require('./routes/menu'))
app.use('/api/order',require('./routes/order'))

app.use((req, res) => {
res.sendFile(__dirname + "/public/index.html");
});
      
module.exports = app;
