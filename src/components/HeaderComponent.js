import React, {Component} from 'react';

import {Navbar, NavbarBrand, Nav, NavbarToggler, Form, FormGroup, Label, Button, 
    NavItem, Collapse, Input, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';

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
                <Navbar dark expand="sm">
                    <div className="container-fluid">
                        <NavbarBrand href="" className="mr-auto">
                            <h2>Kognetics</h2>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />

                        <Collapse navbar isOpen={this.state.isNavOpen}>
                            <Nav navbar className="ml-auto">
                                <Form align="center" className="form-inline mr-4 text-center">
                                    <div><span className="fa fa-search fa-lg"></span></div>
                                    <Input type="text" style={{width: 400, backgroundColor:'black',border:'none'}}
                                        placeholder="Search for companies, people & investors" 
                                         />
                                </Form>
                                    
                                
                                <UncontrolledDropdown nav inNavbar isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown} className="align-right ml-5">
                                    <DropdownToggle caret>
                                        Mrinalini Saha
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem header>Header</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        </Collapse>

                        
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Header;