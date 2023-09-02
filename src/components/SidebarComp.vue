<template>
    <section class='sidebar'>
        <div className='sidebar__header'>
            <div class="header__data">
                <p id="timestamp">{{dataBlock}}</p>
                <span>{{timeBlock}}</span>
            </div>
            <div class="exit" title="Выход" @click="exit">
                <button>Выход</button>
                <img src="../assets/img/svg/exit.svg" alt="Упс..">
            </div>
            

        </div>
    </section>
</template>

<script>
export default {
    data(){
        return{
            dataBlock: '',
            timeBlock: ''
        }
    },        
    created() {
            setInterval(this.getNow, 1000);
        },
    methods: {
        exit(){
            this.$router.push('/')
        },

        getNow() {
            let today = new Date();
            let date = today.getDate()+'.'+ (today.getMonth()+1)+'.' + today.getFullYear();
            let time = today.getHours() + ":" + today.getMinutes();
            this.dataBlock = date
            this.timeBlock = time;
        }
    },
}
</script>

<style lang="css">


</style>