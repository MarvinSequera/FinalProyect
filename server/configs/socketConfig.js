const Order = require('../models/Oder.model')
const requestDish = require('../models/RequestDish.model')
const User = require('../models/User')
//const tableList =[]



module.exports = (io) => {

io.on("connection",socket =>{
    console.log("socket connected")

    socket.on("ordersConfirmed", order => {
        // console.log(order)
        Order.findById(order)
        .populate('user')
        .populate('dishRequested')
        .then(order => {
            console.log(order)
            io.emit('confirmed' , order)
            })
        .catch(err => console.log("error al recuperar las ordernes para cocinar",err))
    })



    //Disconection
    // socket.on('disconnnect', () => {
    //     console.log("Mesa desconectada")
    // })
})

}


