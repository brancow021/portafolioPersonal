import React, { Component } from 'react'


class Footer extends Component{

	constructor(props){
		super(props)
	}

	render(){
		const {fecha} = this.props
		return(
			<div className = "footer">
				<footer>
					© Todos los Derechos reservados {fecha}
				</footer>
			</div>
		)
	}
}

export default Footer