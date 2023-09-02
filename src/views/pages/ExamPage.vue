<template>
    <div class="center">
        <h2>Страница предсменного экзамена</h2>
        <button @click="goBack">Назад</button>
    </div>
</template>


<script>
export default{
    name: 'ExamPage',
    methods: {
        goBack(){
            this.$router.go(-1)
        }
    },
}
</script>