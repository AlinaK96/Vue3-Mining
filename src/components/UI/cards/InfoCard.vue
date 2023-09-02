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
                    img: '/img/png/work.png'
                },
                {
                    id: 2,
                    title: 'Уведомления',
                    img: '/img/png/notification.png'
                },
                {
                    id:3,
                    title: 'Обучение',
                    img: '/img/png/study.png'
                },
                {
                    id:4,
                    title: 'Достидения',
                    img: '/img/png/achive.png'
                }
            ]
        }
    }
}
</script>