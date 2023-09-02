<template>
    <div class="info__cards">
        <router-link :to=item.link v-for="item in cards" 
                    :key=item.id 
                    :title=item.title 
                    class="info__card"
        >
            <p>{{ item.title }}</p>
            <img :src=item.img alt="Упс..">
        </router-link>
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