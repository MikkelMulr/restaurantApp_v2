import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home.component';
import Restaurant from './pages/restaurant/Restaurant.component';
import Header from './components/header/Header.component';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Header />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/restaurant' component={Restaurant} />
			</Switch>
		</div>
	);
}

export default App;
