<template>
    <div>
        <div v-for="item in info" :key=item.id>
            {{ item.title }}
            <img :src=item.img alt="Упс...">
            <router-link :to=item.link>hhh</router-link> 
        </div>
    </div>
</template>

<script>
export default {
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
                },
                {
                    id:3,
                    title: 'Тестов выполнено',
                    data: 12,
                    link: 'tests'
                },
                {
                    id:4,
                    title: 'Аттестация церез',
                    data: '3 дня',
                    link: 'accreditation'
                },
            ]
        }
    },
    methods: {
        // SeeDetails(){
        //     this.$router.push(this.item.link)
        // }
    }
}
</script>