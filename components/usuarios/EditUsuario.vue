<script setup>
const props = defineProps({
    usuarioId: {
        type: Array,
        required: true
    },
})

import { ref, onBeforeMount } from 'vue';
import axios from 'axios'

const usuario = ref({
    id: '',
    email: '',
    password: '',
    nombre: '',
    activo: false,
    combinarEstadisticas: false,
    privilegios: 'Usuario',
});

// Funcion para editar la radio
const editarUsuario = async () => {
    try {
        const response = await axios.put('https://inovanex.onrender.com/users', usuario.value);
        console.log(response);
    } catch (err) {
        console.error(err);
    }
};

onBeforeMount( async () => {
    const response = await axios.get(`https://inovanex.onrender.com/users/getuser/${props.usuarioId}`)
    usuario.value.id = props.usuarioId
    usuario.value.email = response.data.email
    usuario.value.password = response.data.password
    usuario.value.nombre = response.data.name
    usuario.value.activo = response.data.active === 1 ? true : false
    usuario.value.combinarEstadisticas = response.data.blendstats === 1 ? true : false
    usuario.value.privilegios = response.data.privileges
})
</script>


<template>
    <form @submit.prevent="editarUsuario">
        <label>
            Correo Electrónico:
            <input v-model="usuario.email" type="email" required />
        </label>

        <label>
            Contraseña:
            <input v-model="usuario.password" type="password" required />
        </label>

        <label>
            Nombre:
            <input v-model="usuario.nombre" type="text" required />
        </label>

        <label>
            Activo:
            <input v-model="usuario.activo" type="checkbox" />
        </label>

        <label>
            Combinar Estadísticas:
            <input v-model="usuario.combinarEstadisticas" type="checkbox" />
        </label>

        <label>
            Privilegios:
            <select v-model="usuario.privilegios">
                <option value="Usuario">Usuario</option>
                <option value="Admin">Admin</option>
            </select>
        </label>

        <button type="submit">Crear Usuario</button>
    </form>
</template>