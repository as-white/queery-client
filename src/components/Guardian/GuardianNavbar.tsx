import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button
} from 'reactstrap';
import APIURL from '../../helpers/evironment'

export interface NavBarProps {
    
}
 
export interface NavBarState {
    isOpen: boolean;
}
 
class NavBar extends React.Component<NavBarProps, NavBarState> {
    constructor(props: NavBarProps) {
        super(props);
        this.state = { isOpen: true };
    }

    Toggle = () => {
        this.setState({isOpen: !this.state.isOpen});
    }

    clearToken = () => {
        localStorage.clear();
        window.location.reload(true);
      }


    render() { 
        return ( 
            <div>
      <Navbar className="queery" light expand="md">
        <NavbarBrand href="/"><img className="logo" src="https://i.imgur.com/jHNlYpm.png" /></NavbarBrand>
        <NavbarBrand><h6 className="slogan">Connect with a community that cares.</h6></NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>{localStorage.getItem('token')  && localStorage.getItem('role') === "Guardian" ?
              <NavLink href="/yourprofile">Create/View Profile</NavLink> : <></>}
            </NavItem>
            <NavItem>{localStorage.getItem('role') === "Guardian" && localStorage.getItem('token')  ?
              <NavLink href="/postboard">Community</NavLink> : <></>}
            </NavItem>
            <NavItem>{localStorage.getItem('token') ?
          <Button className="signout" class="navbar-right" onClick={this.clearToken}>Log Out</Button> : <></>}
          </NavItem>
          </Nav>
      </Navbar>
    </div>
  );
}
}

 
export default NavBar;