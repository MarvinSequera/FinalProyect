import React from 'react'
import Col from 'react-bootstrap/Col'
import {Link} from "react-router-dom"

const DishCard =({_id,name,quantity,image,ingredients,category})=>{
    return (
        <Col md="4">
            <Link className="text-decoration" to={`/menu/detail/${_id}`}>
                <img src={image} alt="dish"/>
                <h3>{name}</h3>
            </Link>
        </Col>
    )
}
export default DishCard