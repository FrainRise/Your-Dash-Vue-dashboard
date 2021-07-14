<template>
  <sidebar />
  <div class="container">
    <main-header />
    <router-view/>
  </div>

</template>
<script>
import './assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import MainHeader from '@/components/MainHeader.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
  components: {
    MainHeader,
    Sidebar
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}

body {
  background: #ebebeb;
  overflow-x: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%; 
}

.container {
  width: 100%;
  height: 100vh;
  padding-left: 300px;
}
</style>
