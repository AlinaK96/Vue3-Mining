<template>
    <div class="time">
        <p>{{dataBlock}}</p>
        <span>{{timeBlock}}</span>
    </div>
</template>

<script>
export default {
    name: 'TimeGenerator',
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
            let day = today.getDate()
            let mounth = today.getMonth()

            if (day < 10){
                if (mounth < 10){
                    this.dataBlock = '0'+ day + '.0'+ mounth + '.' +today.getFullYear()
                } else {
                    this.dataBlock= '0' + day+'.'+ mounth + '.' +today.getFullYear()
                }
            } else {
                if (mounth < 9) { 
                    this.dataBlock= day + '.0'+ mounth + '.' +today.getFullYear()
                } else {
                    this.dataBlock = day + '.' + mounth + '.' +today.getFullYear()
                }
            }


            let minutes = today.getMinutes()
            let hours = today.getHours()
            if(hours < 10){
                if(minutes < 10){
                    this.timeBlock = '0' + hours + ':0' + minutes
                } else{
                    this.timeBlock= '0' + hours + ':'+ minutes
                }
            } else{
                if(minutes < 10) { 
                    this.timeBlock = hours +':0' + minutes
                }   else{
                    this.timeBlock = hours +':' + minutes
                }
            }

        }
    }
    
}

</script>