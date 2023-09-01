<template>
    <div>
        <div class="background">
            <div class="shape"></div>
            <div class="shape"></div>
        </div>
        <form>
            <label for="email">Email</label>
            <input type="text" id="email" autocomplete="email" value="" required placeholder="Почта:">

            <label for="password">Пароль</label>
            <input id="password" name="password" type="password" value="" autocomplete="current-password" required placeholder="Пароль:">

            <button @click="Validate" >Войти</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'AuthForm',
        methods:{
            Validate(){
                let email = document.querySelector('#email')
                let password = document.querySelector('#password')
                if (email.value !== '' && password.value!= ''){
                    this.$router.push('main') 
                } 
            }
        }
    }

</script>

<style scoped lang="css">

.background{
    width: 400px;
    height: 350px;
    position: absolute;
    transform: translate(-50%,-50%);
    left: 50%;
    top: 50%;
}
.background .shape{
    height: 180px;
    width: 180px;
    position: absolute;
    border-radius: 50%;
}
.shape:first-child{
    background: linear-gradient(
        #a0c24c,
        #ebe774
    );
    left: -80px;
    top: -80px;
}
.shape:last-child{
    background: linear-gradient(
        to right,
        #ef7f1b,
        rgb(229, 216, 75)
    );
    right: -30px;
    bottom: -80px;
}

@media (max-width:600px){
    .background{
        width: 25px;
        height: 300px;
    }
    .background .shape{
        width: 140px;
        height: 140px;
    }
}

form{
    height: 450px;
    width: 400px;
    background-color: var(--background-form);
    position: absolute;
    transform: translate(-50%,-50%);
    top: 50%;
    left: 50%;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255,255,255,0.1);
    box-shadow: 0 0 40px rgba(8,7,16,0.6);
    padding: 50px 35px;
}

@media (max-width:600px) {
    form{
        height: 400px;
        width: 300px;
        padding: 30px 15px;
    }
}

form *{
    color: #ffffff;
    letter-spacing: 0.5px;
    outline: none;
    border: none;
}

label{
    display: block;
    margin-top: 30px;
    font-size: 16px;
    font-weight: 500;
}

input{
    display: block;
    height: 50px;
    width: 100%;
    background-color: rgba(255,255,255,0.07);
    border-radius: 3px;
    padding: 0 10px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 300;
}
::placeholder{
    color: #e5e5e5;
}

button{
    margin-top: 50px;
    width: 100%;
    background-color: var(--font-primary);
    color: #080710;
    padding: 15px 0;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s ease-in;
}

button:hover{
    background: rgb(160,194,76);
    background: linear-gradient(29deg, rgba(160,194,76,1) 33%, rgba(239,137,27,0.8604691876750701) 91%);
    color: var(--font-primary)
}

</style>
