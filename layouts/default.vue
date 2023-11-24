<script setup>
/*
Nombre del componente: Default Layout

Funcion: Es el layout por defecto del panel de control
contiene barra lateral de opciones y barra superior.

Programador: Josue Alejandro

*/


//imports
import { ref } from 'vue';

const listPanel = ref([
    {
        name: 'RESUME',
        link: '',
    },
    {
        name: 'ESTADISTICAS',
        link: ''
    },
    {
        name: 'WIDGET',
        link: ''
    },
    {
        name: 'PROGRAMACIÓN',
        link: ''
    },
])

//Variables
const sidebarHandler = ref(true);
const currentSelection = ref('RESUME')

//funciones///

// Abrir y cerrar el menu
const sidebarOpen = () => sidebarHandler.value = !sidebarHandler.value

// Seleccionar opcion
const selectOption = (val) => {
    
}

</script>

<template>
    <!-- Barra superior -->
    <nav class="top-bar">
        <div class="top-bar-container">
            <IconsBurgerMenu @click="sidebarOpen" class="menu-icon"></IconsBurgerMenu>
            <img src="~/assets/logo.png">
        </div>
        <div class="top-bar-container">
            <UiDefaultButton>FM DEL LAGO</UiDefaultButton>
            <UiPowerSvg></UiPowerSvg>
        </div>
    </nav>
    <!-- Fin Barra superior -->
    <div class="content-div">
        <!-- Barra Lateral-->
        <div class="side-bar" v-if="sidebarHandler">
            <div>
                <ul>
                    <p class="mini-title">MENU PRINCIPAL</p>
                    <li 
                    v-for="item in listPanel"
                    class="list-item"
                    @click="selectOption(item.name)"
                    :style="{'background-color': currentSelection == item.name ? '#232325' : 'none',
                    'color': currentSelection == item.name ? 'red' : none}">
                    <IconsResumeIcon class="sidebar-icon" v-show="item.name === 'RESUME'"></IconsResumeIcon>
                    <IconsCalendarIcon class="sidebar-icon" v-show="item.name === 'PROGRAMACIÓN'"></IconsCalendarIcon>
                    <IconsProgrammingIcon class="sidebar-icon" v-show="item.name === 'ESTADISTICAS'"></IconsProgrammingIcon>
                    <IconsWidgetsIcon class="sidebar-icon" v-show="item.name === 'WIDGET'"></IconsWidgetsIcon>
                    {{ item.name }}
                    </li>
                    <p class="mini-title">ADMIN MENU</p>
                </ul>
            </div>
        </div>
        <!-- Fin Barra Lateral -->
            <slot />
    </div>
</template>

<style scoped>
.top-bar{
    height: 64px;
    border-bottom: 1px solid #e6e6e6 !important;
    display: flex;
    align-items: center;
}

.content-div{
    display: flex;
    flex-direction: row;
}

.side-bar{
    background-color: #0c0c0e;
    color: white;
    font-size: 0.8em;
    font-weight: 300 !important;
    height: calc(100vh - 97px);
    padding: 24px 8px 8px 8px;
}

.list-item{
    min-height: 40px;
    border-radius: 4px;
    padding: .5em 8px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-right: 6em;
}

.list-item:hover {
    background-color: #1f1f20;
}

.top-bar{
    display: flex;
    justify-content: space-between;
}

.mini-title{
    padding: .5em 8px;
    min-height: 40px;
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 12px;
}

.top-bar-container{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    min-width: 200px;
}

.menu-icon{
    margin-left: 1em;
    margin-right: 2em;
    cursor: pointer;
}

.sidebar-icon{
    margin-top: 8px;
    margin-bottom: 8px;
    margin-right: 36px;
}

</style>