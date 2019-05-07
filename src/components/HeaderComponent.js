import React, {Component} from 'react';

import {Navbar, NavbarBrand, Nav, NavbarToggler, Form, FormGroup, Label, Button, 
    NavItem, Collapse} from 'reactstrap';

class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            isNavOpen : false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    render(){
        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarBrand href="" className="mr-auto">
                            <h2>Kognetics</h2>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav}>

                        </NavbarToggler>

                        <Collapse navbar isOpen={this.state.isNavOpen}>
                            <Nav navbar>
                                <NavItem>
                                    
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Header;