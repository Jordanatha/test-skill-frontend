import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Container, FormGroup, FormControl,
  Label, Input, Row, Form, Col } from 'reactstrap';
import "./Navbar.css";
import {Link} from 'react-router-dom';
import {BodyComponent} from './Body';

import { Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/components/dropdown.css';
import 'semantic-ui-css/components/transition.css';
import 'semantic-ui-css/components/reset.css';

export const options = [
  { image:{avatar:true, src:'https://www.circleof6app.com/wp-content/uploads/2015/12/thomas_cabus1.png'}, value: '1', text: 'Jordan'},
  { image:{avatar:true, src:'https://www.circleof6app.com/wp-content/uploads/2015/12/thomas_cabus1.png'}, value: '2', text: 'Jordanatha'},
]

const state={
  options
}


class App extends Component {

  render() {
    return (
      <Navbar light expand="md" className="navbar">
        <Container>
          <Form inline>
            <NavbarBrand><Link to="/"><i className="fab fa-linkedin"> press me to go back to home</i></Link></NavbarBrand>
            <FormGroup>
              
            </FormGroup>
          </Form>

          <Dropdown placeholder='Search something...' search selection options={options} />

          <Nav className="ml-auto" navbar>
            <Row className="row">
              <NavItem>
                <NavLink href="/home" style={{color:'white'}} className="i1">
                  <div className="text-center" style={{display:'block'}}>
                    <i className="fas fa-home"></i>
                    <p style={{margin:'0'}}>Home</p>
                  </div>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/my-network" style={{color:'white'}}>
                  <div className="text-center">
                    <i className="fas fa-users"></i>
                    <p style={{margin:'0'}}>My Network</p>
                  </div>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/jobs" style={{color:'white'}}>
                  <div className="text-center">
                    <i className="fas fa-suitcase"></i>
                    <p style={{margin:'0'}}>Jobs</p>
                  </div>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/messaging" style={{color:'white'}}>
                  <div className="text-center">
                    <i className="fas fa-comments"></i>
                    <p style={{margin:'0'}}>Messaging</p>
                  </div>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/notifications" style={{color:'white'}}>
                  <div className="text-center">
                    <i className="fas fa-bell"></i>
                    <p style={{margin:'0'}}>Notifications</p>
                  </div>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/me" style={{color:'white'}}>
                  <div className="text-center">
                    <i className="fas fa-user"></i>
                    <p style={{margin:'0'}}>User</p>
                  </div>
                </NavLink>
              </NavItem>

              <div className="verticalLine"></div>

              <NavItem>
                <NavLink href="/work" style={{color:'white'}}>
                  <div className="text-center">
                    <i className="fas fa-th"></i>
                    <p style={{margin:'0'}}>Work</p>
                  </div>
                </NavLink>
              </NavItem>
            </Row>
          </Nav>
        </Container>
      </Navbar>

    );
  }
}

export default App;