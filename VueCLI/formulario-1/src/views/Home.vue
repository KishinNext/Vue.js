<template>
  <h3 class="mt-5 row justify-content-md-center" >Formulario de inscripción</h3>
  <form @submit.prevent="procesarFormulario">
    <Input :tarea="tarea"/>
  </form>
  <div class="mt-5">
    <ListaTareas />
  </div>
</template> 

<script>
import { computed } from 'vue'
import Input from '../components/Input'
import ListaTareas from '../components/ListaTareas'
import { mapActions } from 'vuex'
const shortid = require('shortid')

export default {
  name: 'Home',
  components: {
    Input,
    ListaTareas
  },
  data(){
    return{
      tarea:{
        id :'',
        nombre:'',
        correo:'',
        categorias:[],
        estado:'',
        numero: Int8Array,
        disable: "true"
      }
    }
  },
  methods:{
    ...mapActions(['setTareas']),
    procesarFormulario(){
      console.log(this.tarea)
      if(this.tarea.nombre.trim() == ""){
        console.log("Campo Vacio")
        return
      }
      // generar id
      this.tarea.id = shortid.generate()
      // Envia los datos
      this.setTareas(this.tarea)

      //Limpia campos
      this.tarea = {
        id: '',
        nombre:'',
        correo:'',
        categorias:[],
        estado:'',
        numero: Int8Array,
        disable: "true"
      }
    }
  },

}
</script>
