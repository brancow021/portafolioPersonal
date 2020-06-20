import axios from 'axios'


export const clienteAxios = axios.create({
	baseURL: 'https://portafolio-brancow.herokuapp.com/'
})

