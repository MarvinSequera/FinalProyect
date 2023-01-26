import React, { Component } from 'react'
import DishService from '../../service/Dish.service.js'
import OrderService from '../../service/Order.service'
import {Container, Row, Col, Form,Button} from 'react-bootstrap'
import {Link} from "react-router-dom"

class DishDetail extends Component{
    constructor(props){
        super(props)
        this.state = { 
            dish:{},
            newDish:{},
            size:["Pequeño","Mediano","Grande"],
            selected:"",
            qty:["Sin","Con","Extra"]
        }
        this._dishService = new DishService()
        this._orderService = new OrderService()
    }
    componentDidMount = () =>{
        const dishId = this.props.match.params.id
        this._dishService.request(dishId)
        .then(theDish => this.setState({dish:theDish.data, newDish: theDish.data, selected:theDish.data.size}) )
        .catch(err => console.log("error al recuperar la informacion del plato de forma individual",err))
    }
    handleSubmit = e =>{
        e.preventDefault()
        const newRequest = {
            name: this.state.newDish.name,
            ingredients: this.state.newDish.ingredients,
            category: this.state.newDish.category,
            image: this.state.newDish.image,
            size: this.state.newDish.size
            }
        // console.log(newRequest)
        this._orderService.addRequest(newRequest)
        .then(x => this.props.history.push('/order'))
        .catch(err=> console.log("error al sumar un plato requerido",err))
    }

    handleInputChange = e => {
        let {name,value}=e.target
        //console.log(name, value)
        // console.log(this.state.newDish.ingredients)
        const ingred = {...this.state.newDish}

        let changeIngridients = ingred.ingredients.map(ingr => {
             if(Object.keys(ingr)[0].includes(name)) {
                ingr[name] = value
             }
             return ingr
        })

        this.setState({
            newDish:{...this.state.newDish, ingredients: changeIngridients}
        })
    }
    handleSelectChange = e =>{
        this.setState({
            selected:e.target.value ,
            newDish:{...this.state.newDish, size: e.target.value},
            })
            console.log(this.state.newDish)
    }

    render(){
        return(
            <Container className="background-app">
                <Row className="detail">
                    <Col md={{ span:5,offset:1}}>
                    <h1>{this.state.dish.name}</h1>
                    <img src={this.state.dish.image} alt="dish"/>
                    </Col>
                    <Col md={{ span:3,offset:1}}>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group as={Row}>
                        {this.state.newDish.ingredients &&
                            this.state.newDish.ingredients.map((elm,idx) =>(
                                <>
                                <Form.Label key={idx} column sm="6">
                                {Object.keys(elm)}
                                </Form.Label>
                                <Col sm="6">
                                <Form.Control as="select" name={Object.keys(elm)} onChange={this.handleInputChange} value={Object.values(elm)[0]}>
                                {this.state.qty.map((e,i)=>(
                                    e!==Object.values(elm)[0] ? <option value={e} key={i}>{e}</option> : <option value={Object.values(elm)[0]}>{Object.values(elm)[0]}</option>
                                ))}
                                </Form.Control>
                                </Col>
                                </>
                            ))
                        }
                        {this.state.newDish.size && 
                            <>
                            <Form.Label>Tamaño</Form.Label>
                            <Form.Control as="select" value={this.state.selected} onChange={this.handleSelectChange}>
                            {this.state.size.map((elm,idx)=>(
                                elm!==this.state.selected ?  <option value={elm} key={idx}>{elm}</option> : <option value={this.state.selected} key={this.state.newDish._id}>{this.state.selected}</option>
                            ))}
                            </Form.Control>
                            </>
                        }
                        </Form.Group>
                 <Button variant="dark" className="small-button"  type="submit">Agregar</Button>
                    </Form>
                    </Col>
                </Row>
                <Row className="button">
                    <Col md={{ offset:1}}>
                        <Button className="medium-button button" as={Link} to="/menu">Vuelta a Menu</Button>
                    </Col>
                    <Col>
                        <Button className="medium-button button" variant="outline-danger" as={Link} to="/order">Mi Pedido</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default DishDetail