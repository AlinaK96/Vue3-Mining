<template>
    <section class='sidebar'>
        <div class='sidebar__header'>
            <div class="header__data">
                <InfoTime />
            </div>
            <div class="exit" title="Выход" @click="exit">
                <button>Выход</button>
                <img src="../assets/img/svg/exit.svg" alt="Упс..">
            </div>
        </div>
        <ThemeToggle />

        <div class='sidebar__content'>
            <PersonalCard />
            <JobCard />
        </div>
    </section>
</template>

<script>
    import InfoTime from './UI/time/InfoTime.vue'
    import ThemeToggle from './UI/themeToggle/ThemeToggle.vue'
    import PersonalCard from './UI/cards/PersonalCard.vue'
    import JobCard from './UI/cards/JobCard.vue'

    export default {
        name: 'SidebarComp',
        components: {
            InfoTime,
            ThemeToggle,
            PersonalCard,
            JobCard
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