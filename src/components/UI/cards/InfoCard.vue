<template>
    <div class="info__cards">
        
        <router-link :to=item.link v-for="item in cards" 
                    :key=item.id 
                    :title=item.title 
                    class="info__card"
        >   
            <pop-up v-if="item.title === 'Уведомления'" :amount=item.popup />
            <p>{{ item.title }}</p>
            <img :src=item.img alt="Упс..">
        </router-link>
    </div>
</template>


<script>
import PopUp from '../popup/PopUp.vue'
export default{
  components: { PopUp },
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
                    link: 'notifications',
                    popup: 2
                },
                {
                    id:3,
                    title: 'Обучение',
                    img: '/study.png',
                    link: 'study'
                },
                {
                    id:4,
                    title: 'Достижения',
                    img: '/achive.png',
                    link: 'achivements'
                }
            ]
        }
    }
}
</script>