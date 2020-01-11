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
			restData: {},
			currentRest: ''
		}
	}

	// DATA IS ONLY BEING RECIEVED **AFTER** COMING FROM HOME PAGE AND STILL TAKES HALF A SECOND TO RENDER ONTO THE SCREEN
	// ITS AN ISSUE AND I JUST WANT TO DIE
	// A NOVELLUM BY ME, MR. HATE

	componentDidMount() {
		axios.get(`./data.json`)
			.then(res => {
				const restData = res.data.restaurants;
				this.setState({ restData: restData });
			});
	}

	updateCurrentRestaurant = (id) => {
		this.setState({ currentRest: id });
	}

	handleMenuState = () => {
		this.setState({ menuView: !this.state.menuView });
	}
	render() {
		// console.log(this.state.restData[this.state.currentRest] ? this.state.restData[this.state.currentRest].name : 'nothing');
		return (
			<div className='App' >
				<Header handleMenuState={this.handleMenuState} menuState={this.state.menuView} />
				<Menu menuState={this.state.menuView} />
				<Switch>
					<Route exact path='/' render={(props) => <Home {...props} restData={this.state.restData} updateCurrentRestaurant={this.updateCurrentRestaurant} />} />
					<Route exact path='/restaurant' render={(props) => <Restaurant {...props} current={this.state.currentRest} restData={this.state.restData[this.state.currentRest]} />} />
				</Switch>
			</div>
		);
	}
}

export default App;
