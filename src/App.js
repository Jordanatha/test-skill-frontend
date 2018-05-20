import React, { Component } from 'react';
import './App.css';
import NavbarComponent from "./components/Navbar";
import BodyComponent from "./components/Body";
import ProfileComponent from "./components/Profile";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
    	<div>
	      	<Router>
	      		<div>
	      			<NavbarComponent/>
	      			<Route exact path="/" component={BodyComponent}/>
	      			<Route path ="/profile" component={ProfileComponent}/>
	      		</div>
	      	</Router>
    	</div>
    );
  }
}

export default App;
