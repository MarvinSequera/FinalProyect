import React, { Component } from 'react'
import {Container , Row ,Col, Button} from "react-bootstrap"
import DishService from '../../service/Dish.service'
import DishCard from './DishCard'
import {Link} from "react-router-dom"

class Category extends Component {
    constructor(props) {
        super(props)
        this._dishService= new DishService()
        this.state={
            dishes:[]
        }
    }
    componentDidMount = () => this.updateDishes()

    updateDishes = () =>{
        const category = this.props.match.params.category
        this._dishService.category(category)
        .then(allCategory => this.setState({dishes:allCategory.data}))
    }
    getCategory(a){
        switch (a) {
            case "first":
                return <h1>Entrantes</h1>
                break;
            case "main":
                return <h1>Principales</h1>
                break;
            case "drink":
                return <h1>Bebidas</h1>
                break;
            case "side":
                return <h1>Acompañantes</h1>
                break;
            case "dessert":
                return <h1>Postres</h1>
                break;
            default:
                return <h1>No entro en otro lado</h1>
                break;
        }
    }
    render(){
        this.state.dishes[0] && console.log(this.props.match.params.category)
        return(
            <Container className="background-app">
                {this.getCategory(this.props.match.params.category)}
                <Row>
                    {this.state.dishes.map(dish => <DishCard key={dish._id}{...dish}/>)}
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

export default Category