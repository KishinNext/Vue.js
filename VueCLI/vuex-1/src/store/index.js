import { createStore } from 'vuex'

export default createStore({
  state: {
     contador: 100
  },
  mutations: {
    incrementar(stade, numero){
      stade.contador = stade.contador + numero
    },
    disminuir(stade, numero){
      stade.contador = stade.contador - numero
    }
  },
  actions: {
    accionBoton({commit}, objeto){
      if(objeto.texto){
        commit('incrementar', objeto.numero)
      }
      else{
        commit('disminuir', objeto.numero)
      }

    }
  },
  modules: {
  }
})
