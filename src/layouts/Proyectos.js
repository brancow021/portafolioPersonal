import React, { Fragment} from 'react'

const Proyectos = (props) => {
	const {proyectos} = props


		return(
			<Fragment>
				<div className = "card-portafolio">
					{proyectos.map(proyecto => (
					<div className = "card" key = {proyecto._id}>
						<img src={proyecto.img} alt=""/>
						<div className = "nombre-proyecto">
						<h3>{proyecto.nombreProyecto}</h3>
						</div>

						<div className = "card-descripcion">
							<p>{proyecto.descripcion}</p>
						</div>

						<a href = {proyecto.url} target= "_blank" rel="noopener noreferrer"><button className = "btn-visitar">Visitar</button></a>
					</div>
				))}
				</div>
			</Fragment>	
		)
}
 
export default Proyectos;
