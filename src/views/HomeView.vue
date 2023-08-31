<template>
  <div class="home test1">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld class="test" msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style lang="css">
  .test1{
    background-color: var(--bac-main);
  }
</style>
