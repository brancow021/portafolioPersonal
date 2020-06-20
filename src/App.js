import React, { Fragment } from 'react';
import Navbar from './layouts/Navbar';
import Home from './Componentes/Home';
import Footer from './layouts/Footer';
import './App.css';



//Paquetes externos
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
	<Fragment>
		<Router>
			<div>
				<Navbar/>
			</div>

			<Switch>
				<Route 
					path='/'>
					<Home/>
				</Route>

				<Route 
					path='/portafolio'>
				</Route>
			</Switch>

			<Footer
				fecha = {new Date().getFullYear()}
			/>

		</Router>			
	</Fragment>
  );
}

export default App;
