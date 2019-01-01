import React from "react";
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, FormInline, Dropdown, DropdownToggle, DropdownMenu,  DropdownItem, Fa } from "mdbreact";
import {Popup} from 'semantic-ui-react';


class NavbarPage extends React.Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
  this.setState(prevState => ({
    collapseID: prevState.collapseID !== collapseID ? collapseID : ""
  }));

  render() {
    return (
      <Navbar  dark expand="md" style={{height: "82px",
       backgroundColor:"#2d978e8e",
       cursor: "url('../../tuncurs.png'),auto",
       }}>
       
       <NavbarBrand>
{/* logo */} <img className="imgNavbar" src={require('../TotalPictures/logo.PNG')} alt ="tham"/>
          </NavbarBrand>
          <NavbarToggler
            onClick={this.toggleCollapse("navbarCollapse3")}
          />
          <Collapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
            <NavbarNav right>
              <NavItem active>
                <NavLink to="/">Home</NavLink>
              </NavItem>
              <NavItem>
              <Popup
    trigger={  <NavLink to="/Articles">History</NavLink>}
    content='Consult Our Articles, Add Or Edit An Article About The History Of Tunisia'
    on='hover'
  />
              </NavItem>
              <NavItem>
              <Popup
              trigger={    <NavLink to="/Transport/Home">Transport</NavLink>}
            content='Discover Our Way Of Transport.'
    on='hover' />
              </NavItem> 
              <NavItem>
              <Popup
    trigger={  <NavLink to="/tourism">Tourism</NavLink>}
    content='Discover Our Tourism.'
    on='hover'
  />
         
              </NavItem>
            </NavbarNav>
       
          </Collapse>
        </Navbar>
  
    );
  }
}

export default NavbarPage;