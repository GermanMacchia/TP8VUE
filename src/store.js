import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({

	state : {
		formState: {},
		formData: {
			nombre: '',
			edad: '',
			email: ''
			},
		usuarios: [],
		URL: 'https://628822847af826e39e5d1d18.mockapi.io/entradas',
	},
	actions : {
		async iniciarForm({commit}){
			try{ 
				let { data } = await axios(this.state.URL)		
				commit('ingresarUsuario', data)
			}catch(error) {
				console.error('Error Axios', error)
			}
		},
		async insertarUsuario({commit}){
			try{
				await axios.post(this.state.URL, this.state.formData) 
				let { data } = await axios(this.state.URL)
				
				commit('ingresarUsuario', data)
			}catch(error) {
				console.error('Error Axios', error)
			}
		},
		resetForm({commit}){
			let dataInicial = {
				nombre: '',
				edad: '',
				email: ''
			}
			commit('resetearFormulario', dataInicial)
		}
	},
	mutations : {
		ingresarUsuario(state, data){
			state.usuarios = data
		},
		resetearFormulario(state, dataInicial){
			state.formState._reset()
			state.formData = dataInicial
		}
	}

})