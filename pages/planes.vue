<script setup>

//Variables
const headers = ['id', 'Nombre', 'Acciones']
const data = [
    {
        data: [ 12, 'Plan Full' ]
    },
    {
        data: [17, 'Solo estadisticas']
    },
    {
        data: [20, 'Solo App']
    },
    {
        data: [22, 'Solo Widget']
    }
]

</script>

<template>
    <div class="content-component">
        <UiTableCrud :headers="headers" :data="data" :title-table="'Lista de Planes'"></UiTableCrud>
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