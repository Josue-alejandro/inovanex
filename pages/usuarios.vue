<script setup>

//Variables
const headers = ['id', 'Nombre', 'Email', 'Acciones']
const data = [
    {
        data: [ 8, 'El destape', 'destape@inovanex.com' ]
    },
    {
        data: [67, 'Futuro Rock', 'futurock@inovanex.com']
    },
    {
        data: [30, 'Test', 'Test@gmail.com']
    }
]

</script>

<template>
    <div class="content-component">
        <UiTableCrud :headers="headers" :data="data" :title-table="'Lista de Usuarios'"></UiTableCrud>
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