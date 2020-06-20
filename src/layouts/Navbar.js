import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'

class Navbar extends Component{
	render(){
		return(
			<Fragment>
				<div className ="navbar-principal">
					<h3 className = "logo-navbar">BranCode</h3>

					<ul>
						<a href="/"><li>Inicio</li></a>
						<a href='#informacion'><li>About Me</li></a>
						<a href="#contacto"><li>Contacto</li></a>
					</ul>

					<a href="#portafolio" className = "btn-portafolio"><i className="fas fa-briefcase"></i>Portafolio</a>
				</div>
			</Fragment>
		)
	}
}

export default Navbar
