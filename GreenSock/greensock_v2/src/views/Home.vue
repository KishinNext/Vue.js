<template>
  <div class="home">
    <Menu />
    <Centralbody/>
  </div>
</template>

<script>
import Centralbody from '../components/Centralbody.vue'
import Menu from '../components/Menu'

export default {
  name: 'Home',
  components: {
    Menu,
    Centralbody,
  }
}
</script>
