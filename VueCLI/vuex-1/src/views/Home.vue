<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1
    :style="colorContador"
         >{{titulo}}: {{contador}}</h1>

    <hr>
    <BotonAccion :texto=true  />
    <BotonAccion :texto=false />
  </div>
</template>

<script>
// @ is an alias to /src
import {mapState, mapMutations, mapActions} from 'vuex'
import BotonAccion from '../components/BotonAccion'

export default {
  name: 'Home',
  components: {
    BotonAccion
  },
  data(){  return {
    titulo: "Mi contador es"
  }},
  computed: {
    ...mapState(['contador']),
    colorContador(){
      return [this.contador > 50 ? {'color':'green'}: {'color':'red'}]
    }
  },
  methods:{
    ...mapActions(['accionIncrementar'])
  }
}
</script>
