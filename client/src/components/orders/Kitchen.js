import React, { Component } from 'react'
import OrderService from '../../service/Order.service'
import {Button} from 'react-bootstrap'
import KitchenCard from './KitchenCard'



class Kitchen extends Component {
    constructor(props){
        super(props)
        this.state ={ orders:[] }
        this._orderService = new OrderService()
        this.socket=this.props.socket    
        //console.log(this.socket)

        this.socket.on('confirmed',order=>{
        this.setState({orders:[...this.state.orders, order]})
        console.log(this.state.orders[0])
    })

    }
    handleSubmit = e => {
        e.preventDefault()
        let orderReady = this.state.orders[0]._id
        this.socket.emit("orderReady",orderReady)
        let copyOrders =[...this.state.orders]
        if(copyOrders.lenght===0){
            this.setState({orders:[]})
        }else {
            let removed = copyOrders.splice(0,1)
            this.setState({orders:copyOrders})
        }
    }

    render(){
        
        return(
            this.state.orders[0] ?
            <>
            <h3>{this.state.orders[0].user.username}</h3>
            {this.state.orders[0].dishRequested.map(dishRequested=><KitchenCard key={dishRequested._id}{...dishRequested}/>)}
            <Button onClick={this.handleSubmit}>Listo</Button>
            </>
            :
            <h1>Esperando Pedido</h1>
        )
    }
}
export default Kitchen