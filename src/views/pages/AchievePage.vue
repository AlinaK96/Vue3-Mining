<template>
    <div class="center">
        <h2>Страница достижений</h2>
        <button @click="goBack">Назад</button>
    </div>
</template>


<script>
export default{
    name: 'AchievementsPage',
    methods: {
        goBack(){
            this.$router.go(-1)
        }
    },
}
</script>