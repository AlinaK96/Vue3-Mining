<template>
  <main class="content">
    <SidebarComp /> 
    <!-- <InfoBlock /> -->
  </main>
</template>

<script>
import SidebarComp from '@/components/SidebarComp.vue'
//import InfoBlock from '@/components/InfoBlock.vue'

  export default {
    name: 'MainPage',
    components: {
      SidebarComp,
      //InfoBlock
    }
  }

</script>

<style lang="css" scoped>
  .content{
    display: flex;
    min-height: 100vh
  }

  @media (max-width: 833px){ 
    .content {
      display: flex;
      align-items: center;
      min-width: 375px;
      width: 100%;
      flex-direction: column;
      overflow-x: hidden;
      overflow-y: auto;
    }
  }
</style>
