<template>
  <div class="main">
    <SidebarComp /> 
    <InfoBlock />
  </div>
</template>

<script>
import SidebarComp from '@/components/SidebarComp.vue'
import InfoBlock from '@/components/InfoBlock.vue'

  export default {
    name: 'MainPage',
    components: {
      SidebarComp,
      InfoBlock
    }
  }

</script>

<style lang="css" scoped>
  .main{
    display: flex;
  }
</style>
