<script setup>
const props = defineProps({
    radioId: {
        type: Array,
        required: true
    },
})

import { ref, onBeforeMount } from 'vue';
import axios from 'axios';

const radio = ref({
    id: '',
    nombre: '',
    url: '',
    activo: false,
    acceso: [],
});

const usuarios = ref([]);
const selectedUsers = ref([])
const selectedToShow = ref([])

// Funcion para editar la radio
const editarRadio = async () => {
    radio.value.acceso = selectedUsers
    try {
        const response = await axios.put('https://inovanex.onrender.com/radios', radio.value);
        console.log(response);
    } catch (err) {
        console.error(err);
    }
};

// Función para agregar un usuario
const selectUser = (id, name) => {
  // Verifica si el usuario ya existe en los arrays
  const userExists = selectedUsers.value.includes(id);

  if (!userExists) {
    // Agrega el usuario a los arrays
    selectedUsers.value.push(id);
    selectedToShow.value.push({ id: id, name: name });
  } else {
    // Muestra un mensaje de error o toma alguna otra acción según sea necesario
    console.error(`El usuario con ID ${id} ya ha sido seleccionado.`);
  }
};

onBeforeMount(async () => {
    const response = await axios.get('http://localhost:4000/users');
    usuarios.value = response.data;

    const responseRadio = await axios.get(`http://localhost:4000/radios/getradio/${props.radioId}`)
    radio.value.id = props.radioId[0]
    radio.value.nombre = responseRadio.data.name
    radio.value.url = responseRadio.data.json
    radio.value.activo = responseRadio.data.active == 1 ? true : false
});

</script>

<template>
    <form @submit.prevent="editarRadio">
        <h2>Editar Radio</h2>
        <label>
            Nombre:
            <input v-model="radio.nombre" type="text" required />
        </label>

        <label>
            URL:
            <input v-model="radio.url" type="text" required />
        </label>

        <label>
            Activo:
            <input v-model="radio.activo" type="checkbox" />
        </label>

        <label>
            Acceso:
            <select>
                <option 
                v-for="usuario in usuarios" 
                :key="usuario.id" 
                :value="usuario.id"
                @click="selectUser(usuario.id, usuario.name)">
                    {{ usuario.name }}
                </option>
            </select>
            <div>
                <div v-for="selected in selectedToShow" :key="selected.id">
                    <p>{{ selected.name }}</p>
                </div>
            </div>
        </label>

        <button type="submit">Crear Radio</button>
    </form>
</template>
