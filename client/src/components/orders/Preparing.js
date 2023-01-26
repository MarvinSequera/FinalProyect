import React, { Component } from 'react'
import OrderService from '../../service/Order.service'
import {Button, Container, Row, Col} from 'react-bootstrap'
import sample from '../../final_5dfbcb1a7842900014029781_691688.mp4'


class Preparing extends Component {
    constructor(props){
        super(props)
        this.state ={ activeOrder:this.props.loggedInUser.activeOrder , ready:false}
        this._orderService = new OrderService()
        this.socket=this.props.socket

        this.socket.on('ready',orderReady =>{
            this.state.activeOrder === orderReady && this.setState({ready:true})
        })
    }
    componentDidMount= () =>{
        this._orderService.userId()
        .then(userActiveOrder => this.setState({activeOrder:userActiveOrder.data}))
        .catch(err => console.log("error al recuperar la activeOrder",err))        
    }
    handleSubmit = e =>{
        e.preventDefault()
        this._orderService.orderReady()
        .then(x=>console.log("actualizado el usuario",x))
        .catch(err => console.log("error al actualizar el usuario",err))
        this.props.history.push('/menu')

    }

    render(){
        return(
            this.state.ready ?
            <Container className="background-ready">
                <h1>Tenemos listo vuestro pedido</h1>
                <Col md={{ span:6,offset:4}}>
                    <Button className="big-button" onClick={this.handleSubmit}>Recoger</Button>
                </Col>
            </Container>
            :
            <div className="background-app center-text">
            <h1 className="button">Estamos Preparando tu pedido</h1>
            <video className="videoPlayer" autoPlay loop muted>
                <source src={sample} type="video/mp4"/>
            </video>
            </div>
        )
    }
}
export default Preparing