<template>
    <section class='sidebar'>
        <div className='sidebar__header'>
            <div class="header__data">
                <InfoTime />
            </div>
            <div class="exit" title="Выход" @click="exit">
                <button>Выход</button>
                <img src="../assets/img/svg/exit.svg" alt="Упс..">
            </div>
            

        </div>
    </section>
</template>

<script>
import InfoTime from './UI/time/InfoTime.vue'
export default {
    components: { 
        InfoTime 
    },
    methods: {
        exit(){
            this.$router.push('/')
        }
    },
}
</script>

<style lang="css">


</style>