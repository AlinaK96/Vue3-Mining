<template>
    <div>
        <div v-for="card in card" :key=card.id>
            {{ card.title }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'JobCard',
    data(){
        return{
            cards: [
                {
                    id:1,
                    title: 'Инструктаж',
                    img: '',
                    link: ''
                },
                {
                    id:2,
                    title: 'Предсменный экзаменатор',
                    img: '',
                    link: ''
                },
                {
                    id:3,
                    title: 'Тестов выполнено',
                    data: 12,
                    link: ''
                },
                {
                    id:4,
                    title: 'Аттестация церез',
                    data: '3 дня',
                    link: ''
                },
            ]
        }
    }
}
</script>