import React, { Component } from 'react'
import OrderService from '../../service/Order.service'
import {Container, Row, Col, Form,Button} from 'react-bootstrap'
import {Link} from "react-router-dom"


class DishEdit extends Component{
    constructor(props){
        super(props)
        this.state = { 
            editDish:{},
            size:["Pequeño","Mediano","Grande"],
            selected:"",
            qty:["Sin","Con","Extra"]
        }
        this._orderService = new OrderService()
    }
    
    componentDidMount = () =>{
        const dishId = this.props.match.params.id
        this._orderService.dishEdit(dishId) //aqui se cambio para el request que busca el plato a editar
        .then(theDish => this.setState({ editDish: theDish.data, selected:theDish.data.size}) )
        .catch(err => console.log("error al recuperar la informacion del plato de forma individual",err))
    }

    handleSubmit = e =>{
        e.preventDefault()
        const newRequest = {
            _id: this.state.editDish._id,
            name: this.state.editDish.name,
            ingredients: this.state.editDish.ingredients,
            category: this.state.editDish.category,
            image: this.state.editDish.image,
            size: this.state.editDish.size
            } 
         this._orderService.dishPost(this.state.editDish._id,newRequest)
         .then(x => console.log("entra ya lo puedes cambiar"))
         .catch(err=> console.log("error al editar un plato requerido",err))
         this.props.history.push('/order')
    }

    handleInputChange = e => {
        let {name,value}=e.target
        //console.log(name, value)
        // console.log(this.state.editDish.ingredients)
        const ingred = {...this.state.editDish}

        let changeIngridients = ingred.ingredients.map(ingr => {
             if(Object.keys(ingr)[0].includes(name)) {
                ingr[name] = value
             }
             return ingr
        })

        this.setState({
            editDish:{...this.state.editDish, ingredients: changeIngridients}
        })
    }
    handleSelectChange = e =>{
        this.setState({
            selected:e.target.value ,
            editDish:{...this.state.editDish, size: e.target.value},
            })
            console.log(this.state.editDish)

    }

    render(){
        return(
            <Container className="background-app">
                <Row className="detail">
                    <Col md={{ span:5,offset:1}}>
                    <h1>Edita tu Plato</h1>
                    <h2>{this.state.editDish.name}</h2>
                    <img src={this.state.editDish.image} alt="dish"/>
                    </Col>
                    <Col md={{ span:3,offset:1}}>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group as={Row}>
                        {this.state.editDish.ingredients &&
                            this.state.editDish.ingredients.map((elm,idx) =>(
                                <>
                                <Form.Label key={idx} column sm="6">
                                {Object.keys(elm)}
                                </Form.Label>
                                <Col sm="6">
                                <Form.Control as="select" name={Object.keys(elm)} onChange={this.handleInputChange} value={Object.values(elm)[0]}>
                                {this.state.qty.map((e,i)=>(
                                    e!==Object.values(elm)[0] ? <option value={e} key={i+100}>{e}</option> : <option value={Object.values(elm)[0]}>{Object.values(elm)[0]}</option>
                                ))}
                                </Form.Control>
                                </Col>
                                </>
                            ))
                        }
                        {this.state.editDish.size && 
                            <>
                            <Form.Label>Tamaño</Form.Label>
                            <Form.Control as="select" value={this.state.selected} onChange={this.handleSelectChange}>
                            {this.state.size.map((elm,idx)=>(
                                elm!==this.state.selected ?  <option value={elm} key={idx}>{elm}</option> : <option value={this.state.selected} key={this.state.editDish._id}>{this.state.selected}</option>
                            ))}
                            </Form.Control>
                            </>
                        }
                        </Form.Group>
                 <Button variant="dark" className="small-button" type="submit">Actualizar</Button>
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
export default DishEdit