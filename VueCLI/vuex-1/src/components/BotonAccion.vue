<template>
  <button @click="accionBoton({texto:texto, numero:numero})">{{textoBoton}}</button>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    data(){
        return{
            numero : 40
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