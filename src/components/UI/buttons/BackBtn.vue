<template>
    <button @click="goBack" title="Назад">Назад</button>
</template>

<script>
export default{
    name: 'GoBackBtn',
    methods: {
        goBack(){
            this.$router.go(-1)
        }
    },
}
</script>