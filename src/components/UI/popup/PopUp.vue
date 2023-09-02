<template>
    <div class="popup">{{ amount }}</div>
</template>

<script>
export default {
    name: 'PopUp',
    props: {
        amount: Number
    }
}
</script>

<style scoped>
    .popup{
        z-index: 10;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--extra-content);
        text-align: center;
        color: var(--font-secondary);
    }
</style>