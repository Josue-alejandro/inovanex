<script setup>

//Variables
const headers = ['id', 'Nombre', 'Acciones']
const data = [
    {
        data: [ 12, 'Radio Fm' ]
    },
    {
        data: [17, 'Radio Unir']
    },
    {
        data: [20, 'FM Vos 94.5']
    }
]

</script>

<template>
    <div class="content-component">
        <UiTableCrud :headers="headers" :data="data" :title-table="'Lista de Radios'"></UiTableCrud>
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