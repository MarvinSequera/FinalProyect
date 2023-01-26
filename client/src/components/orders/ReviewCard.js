import React, { Component } from 'react'
import { Row, Col,Button} from 'react-bootstrap'
import {Link} from "react-router-dom"

class ReviewCard extends Component{
    constructor(props){
        super(props)
        this.state={ }
    }
    handleSubmit = e =>{
        e.preventDefault()
        this.props.eliminateSubmit(this.props._id)
    }
    render(){
    return(
        <Col className="detail">
            <Row>
                <h2>{this.props.name}</h2>
                <img src={this.props.image} alt="plato"/>
            </Row>
            <Row>
                <Col md={{ span:3,offset:3 }} className="button-review">
                    <Button variant="outline-dark" className="small-button" as={Link} to={`/edit/${this.props._id}`}>Editar</Button>
                </Col>
                <Col md={{ span:3,offset:2 }} className="button-review">
                    <Button variant="warning" className="small-button" onClick={this.handleSubmit}>Eliminar</Button>
                </Col>
            </Row>
        </Col>
    )
}
}




export default ReviewCard