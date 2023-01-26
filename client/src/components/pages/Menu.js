import React from 'react'
import {Link} from "react-router-dom"
import {Container,Row,Col,Button} from 'react-bootstrap'

const Menu = () =>{
    return(
        <Container className="center-text detail push-title background-app">
            <h1>Menu</h1>
            <Row>
                <Col md="4">
                    <Link className="text-decoration" to='/menu/first'>
                        <img src='https://res.cloudinary.com/marvinsequera/image/upload/v1576428727/ironHack2019/Entrante_vpqk2j.jpg' alt='entrantes'/>
                        <h3>Entrantes</h3>
                    </Link>
                </Col>
                <Col md="4">
                    <Link className="text-decoration" to='/menu/main'>
                        <img src='https://res.cloudinary.com/marvinsequera/image/upload/v1576430026/ironHack2019/Principal_oyx0ve.jpg'alt='principal'/>
                        <h3>Principal</h3>
                    </Link>
                </Col>
                <Col md="4">
                     <Link className="text-decoration" to='/menu/side'>
                        <img src='https://res.cloudinary.com/marvinsequera/image/upload/v1576430848/ironHack2019/Acompanante_xyplch.jpg' alt='Aconpanante'/>
                        <h3>Acompañantes</h3>
                    </Link>
                </Col>
                <Col md="4">
                    <Link className="text-decoration" to='/menu/drink'>
                        <img src='https://res.cloudinary.com/marvinsequera/image/upload/v1576431878/ironHack2019/Bebidas_jczvqu.jpg' alt='Bebida'/>
                        <h3>Bebidas</h3>
                    </Link>
                </Col>
                <Col md="4">
                    <Link className="text-decoration" to='/menu/dessert'>
                        <img src='https://res.cloudinary.com/marvinsequera/image/upload/v1576431466/ironHack2019/Postre_dfyxpf.jpg' alt='Postre'/>
                        <h3>Postres</h3>
                    </Link>
                </Col>
                <Col md="4">
                    <Button className="medium-button margin-center" variant="outline-danger" as={Link} to="/order">Mi Pedido</Button>
                </Col>
            </Row>
        </Container>
    )
}
export default Menu