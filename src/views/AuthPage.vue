<template>
  <div class="auth">
    <img src="../assets/img/png/Logo.png" alt="Упс..">
    <h4></h4>
    <AuthForm/>
  </div>
</template>

<script>
import AuthForm from '@/components/AuthForm.vue'

export default {
  name: 'HomeView',
  components: {
    AuthForm
  }
}
</script>

<style lang="css">
  .auth {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
