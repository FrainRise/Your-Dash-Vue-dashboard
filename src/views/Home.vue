<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <MyLoader />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import MyLoader from '@/components/UI/MyLoader.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    MyLoader
  }
}
</script>
