import React,{Component} from 'react';
import {Navbar,NavbarBrand,NavItem,Collapse,NavbarToggler, Nav} from 'reactstrap';
import {NavLink,Link} from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props);
        this.state= {
            navbarIsOpen: false
        };
        this.navToggler = this.navToggler.bind(this)
    }

    navToggler(){
        this.setState({
            navbarIsOpen : !this.state.navbarIsOpen
        });
    }

    render(){
        return(
            <Navbar dark expand='md' color="dark">
                <div className="container-fluid">
                    <Link to='/home'>
                        <NavbarBrand ><h2> Sanity</h2></NavbarBrand>
                    </Link>
                    <NavbarToggler onClick={this.navToggler} />
                    <Collapse isOpen={this.state.navbarIsOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                    <NavLink className='nav-link' to='/home'> <span className="fa fa-home fa-lg"></span> Home </NavLink>
                            </NavItem>
                            <NavItem>
                                    <NavLink className='nav-link' to='/doctors'> <span className="fa fa-id-badge fa-lg"></span> Doctors </NavLink>
                            </NavItem >
                            <NavItem>
                                    <NavLink className='nav-link' to='/login'><span className="fa fa-sign-in fa-lg"></span> Login/Register </NavLink>
                            </NavItem>
                            <NavItem>
                                    <NavLink className='nav-link' to='/blogs'><span className="fa fa-newspaper-o fa-lg"></span> Blogs </NavLink>
                                
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
                
        );
    }
}

export default Header;