<template>
    <div class="center">
        <h2>Страница уведомлений</h2>
        <div v-for="note in notifications" :key=note.id>
            <span># {{ note.id }}</span>
            <p>{{ note.text }}</p>
        </div>
        <button @click="goBack">Назад</button>
    </div>
</template>


<script>
export default{
    name: 'NotificationPage',
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
    methods: {
        goBack(){
            this.$router.go(-1)
        }
    },
}
</script>