import React, {Component} from 'react';

import {Navbar, NavbarBrand, Nav, NavbarToggler, Form, FormGroup, Label, Button, 
    NavItem, Collapse, Input, Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';

class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            isNavOpen : false,
            dropdownOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    toggleDropdown(){
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropDownOpen
        })
        )
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
                            <Nav navbar className="ml-auto">
                                <NavItem>
                                    <Input type="text" 
                                        placeholder="Search for companies, people & investors" 
                                         />
                                </NavItem>
                                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
                                    <DropdownToggle caret>
                                        Mrinalini Saha
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem header>Header</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </Nav>
                        </Collapse>

                        
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Header;