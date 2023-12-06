<script setup>

import { ref, onBeforeMount } from 'vue'
import axios from 'axios'

//Variables
const headers = ['id', 'Nombre', 'Acciones']
const dataRadios = ref([])
const addProccess = ref(false)
const editProccess = ref(false)
const ToEdit = ref(null)

// Funciones
const deleteRadio = async (id) => {
    const url = 'https://inovanex.onrender.com/radios/delete';

    try {
        axios.delete(url, {
            headers: {
                'Content-Type': 'application/json',
            },
            data: { id: id }, // El objeto JSON que se enviará en el cuerpo de la solicitud
        }).then(res => {
            console.log(res)
        })

        // Llamar a getData() después de recibir la respuesta
        getData();
    } catch (error) {
        console.error('Error al eliminar la radio:', error);
    }
}

const addRadio = () => {
    addProccess.value = true
    editProccess.value = false
}

const editRadio = (id) => {
    addProccess.value = false
    editProccess.value = true
    ToEdit.value = id
}

const getData = async () => {
    //conseguir informacion de los usuarios
    const users = await fetch('https://inovanex.onrender.com/radios');
    const data = await users.json()

    const transformData = (originalData) => {
        return originalData.map(item => {
            const { id, name } = item;
            return {
                data: [id, name]
            };
        });
    }

    const transformedData = transformData(data)
    dataRadios.value = transformedData
}

onBeforeMount( async () => {
    getData()
})
</script>

<template>
    <div class="content-component">
        <UiTableCrud
        v-if="addProccess !== true && editProccess !== true" 
        :headers="headers" 
        :data="dataRadios" 
        :title-table="'Lista de Radios'"
        @delete-value="deleteRadio"
        @add-value="addRadio"
        @edit-value="editRadio"></UiTableCrud>
        <RadiosRadioForm v-else-if="addProccess !== false && editProccess !== true"></RadiosRadioForm>
        <RadiosRadioEdit v-else :radio-id="[ToEdit]"></RadiosRadioEdit>
    </div>
</template>

<style scoped>
.content-component{
    background-color: #eef0f8;
    width: 100%;
    height: calc(100vh - 65px);
    overflow-y: scroll;
}
</style>