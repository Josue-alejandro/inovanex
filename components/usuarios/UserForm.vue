
<script setup>
import { ref } from 'vue';
import axios from 'axios'

const usuario = ref({
    email: '',
    password: '',
    nombre: '',
    activo: false,
    combinarEstadisticas: false,
    privilegios: 'Usuario',
});

const crearUsuario = async () => {
    try{
        const response = await axios.post('https://inovanex.onrender.com/users', usuario.value)
        console.log(response)
    }catch (err) {
        console.log(err)    
    }
};
</script>


<template>
    <form @submit.prevent="crearUsuario">
        <label>
            <input v-model="usuario.email" type="email" required placeholder="Correo" />
        </label>

        <label>
            <input v-model="usuario.password" type="password" required placeholder="Contraseña" />
        </label>

        <label>
            <input v-model="usuario.nombre" type="text" required placeholder="Nombre" />
        </label>

        <label class="switch">
            <input v-model="usuario.activo" type="checkbox" />
            <span class="slider round"></span>
        </label>

        <label class="switch">
            <input v-model="usuario.combinarEstadisticas" type="checkbox" />
            <span class="slider round"></span>
        </label>

        <label>
            <select v-model="usuario.privilegios">
                <option value="Usuario">Usuario</option>
                <option value="Admin">Admin</option>
            </select>
        </label>

        <div class="botonera">
        <UiDefaultButton type="submit" class="sendButton">GUARDAR</UiDefaultButton>
        <UiGreyButton class="sendButton">Cancelar</UiGreyButton>
        </div>
    </form>
</template>

<style scoped>
form{
    display: flex;
    flex-direction: column;
}

label{
    display: flex;
    width: 100%;
    align-items: self-start;
    height: 60px;
    flex-direction: column;
    margin-left: 24px;
    margin-top: 24px;
}

input, select{
    font-size: 16px;
    padding: 13px;
    border: 1px solid rgba(182, 182, 182, 0.63);
    border-radius: 5px;
    margin: 10px 10px 10px 0px;
    transition: border 0.2s;
    background-color: rgba(0, 0, 0, 0);
    min-width: 300px;
}

input:focus{
    border: 1px solid #f8192c;
    outline: none;
}

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}
/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #f8192c;
}

input:focus + .slider {
  box-shadow: 0 0 1px #f8192c;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.sendButton{
    max-width: 130px;
    margin: 24px;
}

.botonera {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: flex-end;
    padding-top: 3em;
}
</style>