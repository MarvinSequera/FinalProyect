import React from 'react'
import Col from 'react-bootstrap/Col'

const KitchenCard=({name,size,ingredients}) =>{
    return(
        <Col md="4">
            <h5>{name}</h5>
            <p>{size}</p>
            {ingredients.map((elm,idx)=> <p key={idx}>{Object.keys(elm)}:{Object.values(elm)}</p>)}
        </Col>
    )
}
 export default KitchenCard