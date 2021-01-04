<template>
  <div class="home">
    <img id = "logo" alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div>
        <GreenSock/>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import GreenSock from '../components/GreenSock.vue'
import { gsap } from "gsap";

export default {
  name: 'Home',
  components: {
    HelloWorld,
    GreenSock
  },
  mounted: function(){
    gsap.from('#logo',{
      duration:2,
      x:300,
      background:'grey',
      borderRadius:'20%',
      border:'5px solid blue',
      ease:'bounce'
    })
  }
}
</script>
