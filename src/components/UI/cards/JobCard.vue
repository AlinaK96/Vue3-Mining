<template>
    <div class="personal__page">
        <router-link :to=item.link v-for="item in info" :key=item.id class="personal__link" :title=item.title>
            <p>{{ item.title }}</p>
            <div class="circle">
                <img :src=item.img alt="Упс..">
            </div> 
        </router-link> 

        <router-link :to=item.link v-for="item in data" :key=item.id class="personal__link" :title=item.title>
            <p>{{ item.title }}</p>
            <progress-bar :style=item.style :data=item.data></progress-bar>
        </router-link> 
    </div>
</template>

<script>
import ProgressBar from '../progressbar/ProgressBar.vue'
export default {
    components: { ProgressBar },
    name: 'JobCard',
    data(){
        return{
            info: [
                {
                    id:1,
                    title: 'Инструктаж',
                    img: '/instructions.png',
                    link: 'instructions'
                },
                {
                    id:2,
                    title: 'Предсменный экзаменатор',
                    img: '/test.png',
                    link: 'exam'
                }
            ],

            data: [
                {
                    id:3,
                    title: 'Тестов выполнено:',
                    data: 12,
                    link: 'tests',
                    style: '--value:12'
                },
                {
                    id:4,
                    title: 'Аттестация через:',
                    data: '3 дня',
                    link: 'accreditation',
                    style: '--value:3'
                }
            ]
        }
    }
}
</script>