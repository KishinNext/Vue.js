<template>

  <form @submit.prevent="updateTare(tarea)">
    <Input :tarea="tarea"/>
  </form>
  
</template>

<script>
import {mapState, mapActions} from 'vuex'
import Input from '../components/Input'
export default {
    components:{
        Input
    },
    computed:{
        ...mapState(['tarea'])
    },
    methods:{
        ...mapActions(['setTarea','updateTare'])
    },
    created(){
        this.setTarea(this.$route.params.id)
    }

}
</script>

<style>

</style>