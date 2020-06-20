import React, { Fragment } from 'react';

const Contacto = () => {
	return ( 
		<Fragment>

			<div className = 'formulario-contacto'>
				<form>
					<div>
						<label htmlFor="nombre">Nombre: </label>
						<input name = "nombre" type="text" placeholder = "Tu Nombre" minLength = "1" required/>
					</div>
					
					<div>
						<label htmlFor="email">Email: </label>
						<input name = "email" type="email" placeholder = "Tu Email" minLength = "6" required/>
					</div>

					<div>
						<label htmlFor="descripcion">Descripcion: </label>
						<textarea name="descripcion" cols="30" rows="10"></textarea>
					</div>

					<input className = "btn-visitar" type="submit" value = "Enviar"/>
				</form>
			</div>
		</Fragment>
	 );
}
 
export default Contacto;