import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home.component';
import Restaurant from './pages/restaurant/Restaurant.component';
import Header from './components/header/Header.component';
import Menu from './components/menu/Menu.component';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			menuView: false
		}
	}

	handleMenuState = () => {
		this.setState({ menuView: !this.state.menuView });
	}
	render() {

		return (
			<div className='App' >
				<Header handleMenuState={this.handleMenuState} />
				<Menu menuState={this.state.menuView} />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/restaurant' component={Restaurant} />
				</Switch>
			</div>
		);
	}
}

export default App;
