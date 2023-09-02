<template>
    <div>
        <div class='personal__card' @click="goToProfile" title="Перейти в профиль">
            <div class="personal__card__private">
                <p>{{ person.surname }} {{ person.name }} {{ person.patronymic }}</p>
                <span>{{ person.birthdate }}</span>
            </div>
            <div class="personal__card__job">
                <p>{{ person.tabNum }}</p>
                <span>{{ person.occupation }}</span>
            </div>            
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PersonalCard',
        data(){
            return{
                person: 
                    {
                        id: 1,
                        name: 'Иван',
                        surname: 'Иванов',
                        patronymic: 'Иванович',
                        birthdate: '20.05.1985',
                        tabNum: 'ГОКИ 0000',
                        occupation: 'Проходчик IV разряда'
                    }
                
            }
        },
        methods: {
            goToProfile(){
                this.$router.push('/profile')
            }
        }
    }
</script>