<script setup>
/*
Nombre del componente: Default Layout

Funcion: Es el layout por defecto del panel de control
contiene barra lateral de opciones y barra superior.

Programador: Josue Alejandro

*/


//imports
import { ref, onBeforeMount } from 'vue';

const listPanel = ref([
    {
        name: 'RESUME',
        link: 'dashboard',
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

const adminPanel = ref([
    {
        name: 'RADIOS',
        link: 'radios',
    },
    {
        name: 'USUARIOS',
        link: 'usuarios',
    },
    {
        name: 'PLANES',
        link: 'planes',
    },
    {
        name: 'CONFIGURACIONES',
        link: '',
    },
])

//Variables
const router = useRouter()
const route = useRoute()
const sidebarHandler = ref(true);
const currentSelection = ref('RESUME')
const radiosMenu = ref(false)
const radiosArray = ref([
    {
        name: 'RadioRock App'
    },
    {
        name: 'FM del Lago',
        jsonURL: 'https://cdn.instream.audio:9180/status-json.xsl',
        active: true,
        users: ['test']
    },
    {
        name: 'Radio Del Mar'
    }
])

//funciones///
// Abrir y cerrar el menu
const sidebarOpen = () => sidebarHandler.value = !sidebarHandler.value

// Abrir y cerrur menu de radios
const radiosMenuHandler = () => radiosMenu.value = !radiosMenu.value

// Seleccionar opcion
const selectOption = (val) => {
    router.push({ name: val })
    currentSelection.value = val
}

const radioText = (text) => {
    const finalText = text.length > 16 ? text.slice(0, 17) + '...' : text.slice(0,17)
    return finalText
}

onBeforeMount(() => {
    const actualRoute = router.currentRoute.value.path.replace(/^\/+/, '')
    currentSelection.value = actualRoute
})

</script>

<template>
    <!-- Barra superior -->
    <nav class="top-bar">
        <div class="top-bar-container">
            <IconsBurgerMenu @click="sidebarOpen" class="menu-icon"></IconsBurgerMenu>
            <img src="~/assets/logo.png">
        </div>
        <div class="top-bar-container radio-select-container">
            <UiDefaultButton @click="radiosMenuHandler">
                <p class="radiosSelect">FM DEL LAGO</p>
                <IconsChevronDown></IconsChevronDown>
            </UiDefaultButton>
            <Transition>
                <div class="radio-list" v-if="radiosMenu">
                    <ul>
                        <li v-for="radio in radiosArray" :key="radio.name">{{ radio.name }}</li>
                    </ul>
                </div>
            </Transition>
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
                    @click="selectOption(item.link)"
                    :style="{'background-color': currentSelection == item.link ? '#232325' : 'rgba(0,0,0,0)',
                    'color': currentSelection == item.link ? 'red' : none}">
                    <IconsResumeIcon class="sidebar-icon" v-show="item.name === 'RESUME'"></IconsResumeIcon>
                    <IconsCalendarIcon class="sidebar-icon" v-show="item.name === 'PROGRAMACIÓN'"></IconsCalendarIcon>
                    <IconsProgrammingIcon class="sidebar-icon" v-show="item.name === 'ESTADISTICAS'"></IconsProgrammingIcon>
                    <IconsWidgetsIcon class="sidebar-icon" v-show="item.name === 'WIDGET'"></IconsWidgetsIcon>
                    {{ item.name }}
                    </li>
                    <p class="mini-title">ADMIN MENU</p>
                    <li 
                    v-for="item in adminPanel"
                    class="list-item"
                    @click="selectOption(item.link)"
                    :style="{'background-color': currentSelection == item.link ? '#232325' : 'rgba(0,0,0,0)',
                    'color': currentSelection == item.link ? 'red' : none}">
                    <IconsRadios class="sidebar-icon" v-show="item.name === adminPanel[0].name"></IconsRadios>
                    <IconsUsers class="sidebar-icon" v-show="item.name === adminPanel[1].name"></IconsUsers>
                    <IconsPlans class="sidebar-icon" v-show="item.name === adminPanel[2].name"></IconsPlans>
                    <IconsSettings class="sidebar-icon" v-show="item.name === adminPanel[3].name"></IconsSettings>
                    {{ item.name }}
                    </li>
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

.radiosSelect{
    margin-right: .7em;
}

.radio-select-container{
    margin-right: 2em;
}

.radio-list{
    background-color: white;
    position: absolute;
    top: 3.1em;
    box-shadow: 0px 8px 11px -4px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 8px 11px -4px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 8px 11px -4px rgba(0,0,0,0.75);
    width: 180px;
    padding: 1em;
    border-radius: 5px;
    min-height: 500px;
    overflow-y: scroll;
}

.radio-list ul li{
    padding: 0.7em 0em 0.7em;
    cursor: pointer;
}
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>