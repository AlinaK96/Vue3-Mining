<template>
    <div class="center">
        <h2>Страница рабочих задач</h2>
        <button @click="goBack">Назад</button>
    </div>
</template>


<script>
export default{
    name: 'WorkPage',
    methods: {
        goBack(){
            this.$router.go(-1)
        }
    },
}
</script>