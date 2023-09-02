<template>
    <div class="info__card">
        <div v-for="card in cards" :key=card.id>
            <p> {{ card.title }}</p>
            <img :src=card.img alt="Упс..">
        </div>
    </div>
</template>


<script>
export default{
    name: 'InfoCard',
    data(){
        return{
            cards: [
                {
                    id:1,
                    title: 'Начать работу',
                    img: '/work.png',
                    link: 'work'
                },
                {
                    id: 2,
                    title: 'Уведомления',
                    img: '/notification.png',
                    link: 'notifications'
                },
                {
                    id:3,
                    title: 'Обучение',
                    img: '/study.png',
                    link: 'study'
                },
                {
                    id:4,
                    title: 'Достидения',
                    img: '/achive.png',
                    link: 'achivements'
                }
            ]
        }
    }
}
</script>