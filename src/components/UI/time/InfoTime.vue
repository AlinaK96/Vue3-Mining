<template>
    <div>
        <p>{{dataBlock}}</p>
        <span>{{timeBlock}}</span>
    </div>
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
    methods:{
        getNow() {
            let today = new Date();
            let date = today.getDate()+'.'+ (today.getMonth()+1)+'.' + today.getFullYear();
            let time = today.getHours() + ":" + today.getMinutes();
            this.dataBlock = date
            this.timeBlock = time;
        }
    }
    
}

</script>