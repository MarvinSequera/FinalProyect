const Order = require('../models/Oder.model')
const requestDish = require('../models/RequestDish.model')
const User = require('../models/User')



module.exports = (io) => {

io.on("connection",socket =>{
    console.log("socket connected")

    socket.on("ordersConfirmed", order => {
        Order.findById(order)
        .populate('user')
        .populate('dishRequested')
        .then(order => {
            io.emit('confirmed' , order)
            })
        .catch(err => console.log("error al recuperar las ordernes para cocinar",err))
    })

    socket.on("orderReady", orderReady =>{
        
        io.emit("ready", orderReady)
    })
})

}


