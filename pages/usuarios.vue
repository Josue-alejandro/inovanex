<script setup>


// Importaciones
import { ref, onBeforeMount } from 'vue';
import axios from 'axios'

//Variables
const headers = ['id', 'Nombre', 'Email', 'Acciones']
const dataUsers = ref([]);
const addProccess = ref(false)
const editProccess = ref(false)
const ToEdit = ref(null)

//funciones

const deleteUser = async (id) => {
    const url = 'http://localhost:4000/users/delete'

    const response = await axios.delete(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      data: { id: id }, // El objeto JSON que se enviará en el cuerpo de la solicitud
    });
}

const addUser = () => {
    addProccess.value = true
    editProccess.value = false
}

const editUser = (id) => {
    editProccess.value = true
    addProccess.value = false
    ToEdit.value = id
}

onBeforeMount( async () => {
    //conseguir informacion de los usuarios
    const users = await fetch('https://inovanex.onrender.com/users');
    const data = await users.json()

    const transformData = (originalData) => {
        return originalData.map(item => {
            const { id, name, email } = item;
            return {
                data: [id, name, email]
            };
        });
    }

    const transformedData = transformData(data)
    dataUsers.value = transformedData
})

</script>

<template>
    <div class="content-component">
        <UiTableCrud 
        v-if="addProccess === false && editProccess === false"
        :headers="headers" 
        :data="dataUsers" 
        :title-table="'Lista de Usuarios'"
        @delete-value="deleteUser"
        @add-value="addUser"
        @edit-value="editUser"></UiTableCrud>
        <UiDivBox v-else-if="addProccess === true && editProccess === false">
            <h2 class="titleText">Crear nuevo usuario</h2>
            <UsuariosUserForm></UsuariosUserForm>
        </UiDivBox>
        <UiDivBox v-else>
            <h2 class="titleText">Editar Usuario</h2>
            <UsuariosEditUsuario :usuario-id="ToEdit"></UsuariosEditUsuario>
        </UiDivBox>
    </div>
</template>

<style scoped>
.content-component{
    background-color: #eef0f8;
    width: 100%;
    height: calc(100vh - 65px);
    overflow-y: scroll;
}

.titleText{
  padding: 1.8em 0em .5em 1em;
}
</style>