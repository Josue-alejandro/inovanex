<script setup>
/*
Nombre del componente: Login Page

Funcion: Es la pagina para iniciar sesion para dar autorizacion para entrar
al Dashboard

Programador: Josue Alejandro

*/

import { ref } from 'vue';

definePageMeta({
    layout: false,
});

//variables
const router = useRouter()
const userInput = ref('');
const passwordInput = ref('');

const sendLoginRequest = () => {
    if(userInput.value == 'test@gmail.com' && passwordInput.value == '12345'){
        router.push({ name: 'dashboard' })
    }
}

</script>

<template>
    <div class="content-component" >
        <div class="login-container">
            <div class="login">
                <img src="../assets/0.png" alt="logo" width="220">
                <div class="form-container">
                    <input 
                    type="text" 
                    placeholder="Usuario" 
                    class="input-login"
                    v-model="userInput">
                    <input 
                    type="password" 
                    placeholder="Contraseña" 
                    class="input-login"
                    v-model="passwordInput"> 
                    <button 
                    class="login-button"
                    @click="sendLoginRequest">INICIAR SESIÓN</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.content-component{
    background-color: #3f2f2f;
    width: 100%;
    height: 100vh;
    color: white;
    background-image: url('../assets/log1.jpg');
    background-size: cover;
    background-position: center center;
}

.form-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.login-container{
    background-color: rgba(2, 2, 2, 0.8);
    position: relative;
    width: 37%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.input-login {
    background-color: rgba(2, 2, 2, 0);
    border: 1px solid rgba(255, 255, 255, 0.322);
    border-radius: 5px;
    color: white;
    padding: 1em 0.7em 1em 0.7em;
    margin-top: 1.4em;
    font-size: 17px;
    width: 350px;
    outline: none;
}

.input-login:hover{
    border-color: white;
}

.login{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.login-button{
    color: white;
    background-color: #f8192c;
    border-radius: 3px;
    border: none;
    padding: 0.7em;
    width: 100%;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 2px;
    margin-top: 1.7em;
    cursor: pointer;
}
</style>