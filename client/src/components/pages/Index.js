import React from 'react'
import {Container,Row,Col,Button} from 'react-bootstrap'
import {Link} from "react-router-dom"


const Index = () => {
    return (
        <Container className="background-main">
            <Row className="buttondown-main">
                <Col className="center-text push-title-up">
                    <h1>Aplicación de Gestion de Comandas</h1>
                </Col>
            </Row>
            <Row>
                <Col md={{ span:3,offset:2  }}>
                    <Button as={Link} to='/kitchen'  variant="outline-danger" className="big-button">Cocina</Button>
                </Col>
                <Col md={{ span:3,offset:2  }}>
                    <Button as={Link} to='/menu' variant="outline-success" className="big-button">Mesa</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Index