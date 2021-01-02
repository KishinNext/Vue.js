<template>
  <input type="text" v-model="numero">
  <button @click="accionBoton({texto:texto, numero:parseInt(numero)})">{{textoBoton}}</button>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    data(){
        return{
            numero : ''
        }
    },
    props:{
        texto: Boolean
        
    }, 
    computed:{
        textoBoton(){
            return this.texto ? "Incrementar" : "Disminuir"
        }
    },
    methods:{
        ...mapActions(['accionBoton'])
    }
}
</script>

<style>

</style>