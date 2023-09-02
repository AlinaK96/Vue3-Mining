<template>
    <div class="center">
        <h2>Страница обучения</h2>
        <button @click="goBack">Назад</button>
    </div>
</template>


<script>
export default{
    name: 'StudyPage',
    methods: {
        goBack(){
            this.$router.go(-1)
        }
    },
}
</script>