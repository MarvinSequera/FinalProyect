import React, { Component } from 'react'
import OrderService from '../../service/Order.service'
import {Container, Row, Col, Form,Button} from 'react-bootstrap'
import {Link} from "react-router-dom"
import ReviewCard from './ReviewCard'

class Review extends Component{
    constructor(props){
        super(props)
        this.state={
            dishRequested:[],
            orderId:'',
            eliminateId:''

        }
        this._orderService = new OrderService()
        this.socket=this.props.socket
    }
    componentDidMount = () => this.updateInfo()

    updateInfo=() => {
         this._orderService.orderDetail()
        .then(theOrder => {
            this.setState({dishRequested:theOrder.data[0].dishRequested ,orderId:theOrder.data[0]._id})
        })
        .catch(err=> console.log('error al recuperar la orden en la BBDD',err))
        
    }
    // theOrder.data[0]._id aqui esta la id de la orden
    // theOrder.data[0].dishRequested aqui esta el array de platos pedidos
    handleSubmit = e =>{
        e.preventDefault()
        let order= this.state.orderId
        this.socket.emit("ordersConfirmed",order)
        this.props.history.push('/order/preparing')
    }
    eliminateSubmit = id =>{
        this.setState({eliminateId:id})
        this._orderService.dishDelete(id)
        this.updateInfo()
    }
    render(){
        return(
            <Container className="background-app">
                <Col sm='12'><h1>Tu Pedido</h1></Col>
                <Form onSubmit={this.handleSubmit}>
                        {this.state.dishRequested && this.state.dishRequested.map(dishRequested=>    
                        <ReviewCard key={dishRequested._id}{...dishRequested} eliminateSubmit={this.eliminateSubmit}/>
                        )}
                    <Row className="button">
                        <Col md={{ span:2,offset:2 }}>
                            <Button variant="danger" className="medium-button button" type="submit">Confirmar</Button>
                        </Col>
                        <Col md={{ span:3,offset:3 }}>
                            <Button variant="outline-success" as={Link} className="medium-button button" to="/menu">Agregar +</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        )
    }
}
export default Review