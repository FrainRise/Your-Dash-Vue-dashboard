<template>
  <div class="home">
    <my-title :titleText="titleTextHome" />
    <about />
    <guideline /> 
  </div>
</template>

<script>
import About from '@/components/About.vue'
import Guideline from '@/components/Guideline.vue'
import MyTitle from '@/components/UI/MyTitle.vue'

export default {
  components: {
    About,
    Guideline,
    MyTitle
  },
  data() {
    return {
      titleTextHome: 'Welcome to Your Dash'
    }
  },
}
</script>
