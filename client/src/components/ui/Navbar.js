import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Service from '../../service/Auth.service'

class Navigation extends Component {

    constructor(props) {
        super(props)
        this._service = new Service()

    }

    logoutUser = () => {
        this._service.logout()
            .then(x => this.props.setUser(false))
            .catch(err => console.log(err))
    }

    render() {
        const saludo = this.props.loggedInUser ? this.props.loggedInUser.username : 'invitado'

        return (

            this.props.loggedInUser ?
                this.props.loggedInUser.role==="Kitchen" && 
                <Navbar className="background-navbar" variant="dark" expand="md">
                    <Navbar.Brand>Marvin's Menu</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav className="mr-auto">
                            <Nav.Link className="navbar-text" as="li"><Link to="/">Inicio</Link></Nav.Link>
                            <Nav.Link className="navbar-text" as="li"><Link to="/kitchen">Cocina</Link></Nav.Link>
                            <Nav.Link className="navbar-text" as="li"><Link to="/menu">Menu</Link></Nav.Link>
                            <Nav.Link className="navbar-text" as="li" onClick={this.logoutUser}>Logout</Nav.Link>
                        </Nav>
                        <Nav className="ml-auto">
                            <Navbar.Text>Bienvenid@ {saludo}</Navbar.Text>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                :

                <Navbar className="background-navbar" variant="dark" expand="md">
                    <Navbar.Brand>Marvin's Menu</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav className="mr-auto">
                            <Nav.Link className="navbar-text" as="li"><Link to="/">Inicio</Link></Nav.Link>
                            <Nav.Link className="navbar-text" as="li"><Link to="/signup">Registro</Link></Nav.Link>
                            <Nav.Link className="navbar-text" as="li"><Link to="/login">Login</Link></Nav.Link>
                        </Nav>
                        <Nav className="ml-auto">
                            <Navbar.Text>Bienvenid@ {saludo}</Navbar.Text>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        )
    }
}

export default Navigation