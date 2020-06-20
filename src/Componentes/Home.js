import React, { Fragment ,useState , useEffect } from 'react'
import Proyectos from '../layouts/Proyectos';
import { clienteAxios } from '../config/Axios'
import Contacto from '../layouts/Contacto';



	const Home = () => {
		const [proyectos, consultarProyectos] = useState([]);

		useEffect(() => {

				clienteAxios.get('/api/proyectos')
					.then(response => consultarProyectos(response.data.proyectosDb))
					.catch((err) => console.log(err))

		},[])

		return(
			<Fragment>
				<div className = "header">
	
					<div className = "header-presentacion">
	
						<div className= "nombre">
							<h2>Brandon Rodriguez Torres</h2>
						</div>
	
						<div className = "cargo">
							<em>Desarrollador Web</em>
						</div>
	
					</div>
				</div>
	
				<div className = "container" id ="informacion">
					<h3 className= "subtitulos">Informacion</h3>
	
					<div className= "informacion" >
						<div className="sobre-mi">
							<h3>Sobre mi</h3>
	
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut volutpat enim. Integer in lorem dui. Aliquam ac mauris at augue tristique gravida. Nullam nec libero porta, vehicula urna at, venenatis tortor. Nulla mollis, erat ac mattis cursus, erat ligula aliquet turpis, vitae elementum massa nunc hendrerit mi. Nulla sed velit at felis feugiat bibendum. Nunc tristique euismod interdum. Etiam vel elementum mi. Donec tempus odio ut lectus dapibus, at pellentesque enim pretium. Nulla id maximus ligula, eleifend ornare justo. Pellentesque ultrices dolor vitae dapibus scelerisque.
	
							Ut sollicitudin magna eu dolor rutrum varius. Nulla venenatis eget est in tincidunt. Etiam sed ipsum euismod est auctor dignissim quis nec risus. Nunc quis elementum odio. Sed elementum condimentum dapibus. Nam pretium arcu non nisi mattis facilisis eu in neque. In mattis scelerisque velit, et convallis risus sodales porta. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam viverra libero orci, sit amet dapibus diam fermentum ac.
							facilisis eu in neque. In mattis scelerisque velit, et convallis risus sodales porta. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam viverra libero orci, sit amet dapibus diam fermentum ac.
							
							</p>
						</div>
	
						<div className = "sobre-mi conocimientos">
							<h3>Conocimientos</h3>
	
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, doloremque dolorem. Soluta vero eveniet porro blanditiis corporis magnam recusandae et, sequi repellat in magni alias, error corrupti quas dolorem. Provident.</p>
						</div>
					</div>

					<hr/>


					<h3 className = 'subtitulos'id ="portafolio">
						Portafolio
					</h3>

					<div className = "portafolio">
						<Proyectos proyectos = {proyectos}/>
					</div>

					<hr/>

					<h3 className = 'subtitulos' id ="contacto">
						Contacto
					</h3>

					<div className = 'formulario'>
						<Contacto/>
					</div>

				</div>
	
			</Fragment>
			)
		}


export default Home;
