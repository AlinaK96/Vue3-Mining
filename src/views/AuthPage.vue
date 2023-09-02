<template>
  <div class="auth">
    <img src="../assets/img/png/Logo.png" alt="Упс..">
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
    width: 100wh;
    height: 100vh;
    background-color: var(--background-logo);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .auth img{
    margin-top: 15px;
  }
</style>
