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
        <ThemeToggle />
    </section>
</template>

<script>
import InfoTime from './UI/time/InfoTime.vue'
import ThemeToggle from './UI/themeToggle/ThemeToggle.vue'
export default {
    components: { 
        InfoTime,
        ThemeToggle
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