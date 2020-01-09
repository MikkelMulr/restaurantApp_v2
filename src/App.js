import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home.component';
import Restaurant from './pages/restaurant/Restaurant.component';
import Header from './components/header/Header.component';
import Menu from './components/menu/Menu.component';
import axios from 'axios';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			menuView: false,
			restData: {}
		}
	}

	componentDidMount() {
		axios.get(`./data.json`)
			.then(res => {
				const restData = res.data;
				this.setState({ restData });
			});
	}

	handleMenuState = () => {
		this.setState({ menuView: !this.state.menuView });
	}
	render() {
		console.log(this.state.restData);
		return (
			<div className='App' >
				<Header handleMenuState={this.handleMenuState} />
				<Menu menuState={this.state.menuView} />
				<Switch>
					<Route exact path='/' render={(props) => <Home {...props} restData={this.state.restData} />} />
					<Route exact path='/restaurant' Component={Restaurant} />
				</Switch>
			</div>
		);
	}
}

export default App;
