<template>
    <div class="popup">{{ notifications.length }}</div>
</template>

<script>
export default {
    name: 'PopUp',
    data() {
        return {
            notifications: [
                {
                    id: 1,
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, veritatis?'
                },
                {
                    id: 2,
                    text: 'Lsit amet consectetur adipisicing elit. Reiciendis, veritatis?'
                },
                {
                    id: 3,
                    text: 'Lorem ing elit. Reiciendis, veritatis?'
                },
            ]
        }
    },
}
</script>

<style scoped>
    .popup{
        position: relative;
        z-index: 10;
        top: -40px;
        left: 120px;
        width: 45px;
        height: 40px;
        border-radius: 50%;
        background-color: var(--extra-content);
        text-align: center;
        color: var(--font-secondary);
    }
</style>