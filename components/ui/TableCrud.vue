<!-- components/SimpleCrudTable.vue -->
<script setup>
const props = defineProps({
    headers: {
        type: Array,
        required: true
    },
    data: {
        type: Array,
        required: true
    },
    titleTable: {
      type: String,
      required: true
    }
})

//emits
const emit = defineEmits(['deleteValue', 'addValue', 'editValue']);

//funciones
// Eleminar un valor
const deleteValue = (id) => {
  emit('deleteValue', id)
}

// añadir un valor 
const addValue = () => {
  emit('addValue')
}

const editValue = (id) => {
  emit('editValue', id)
}
</script>

<template>
  <UiDivBox>
    <div class="header-div">
      <h2 class="titleText">{{ titleTable }}</h2>
      <UiDefaultButton class="addText" @click="addValue">+ Añadir</UiDefaultButton>
    </div>
    <table>
      <tr class="head-row">
        <th
        class="head-tag" 
        v-for="header in headers" 
        :key="header">
        {{ header }}
        </th>
      </tr>
      <tr v-for="item in data" class="row">
        <td v-for="row in item.data" class="row-item">{{ row }}</td>
        <td>
          <div class="options">
            <div class="option-container" @click="editValue(item.data[0])">
              <IconsEdit class="icon"></IconsEdit>
              <p class="edit">Editar</p>
            </div>
            <div class="option-container" @click="deleteValue(item.data[0])">
              <IconsDelete class="icon"></IconsDelete>
              <p class="delete">Eliminar</p>
            </div>
          </div>
        </td>
      </tr>
    </table>
  </UiDivBox>
</template>

<style scoped>
.head-tag{
  text-align: left;
  color: rgba(0, 0, 0, 0.6);
}

table{
  width: 100%;
  padding: 1.8em;
  font-size: 14px;
}

.row{
  height: 57px;
}

.head-row{
  height: 57px;
}

.titleText{
  padding: 1.8em 0em .5em 1em;
}

.addText{
  margin: 2.6em 0em .5em 4em;
}

.option-container{
  display: flex;
  flex-direction: row;
  margin-bottom: 0.4em;
  cursor: pointer;
  margin-right: 1em;
}

.icon{
  width: 20px;
  margin-right: 5px;
}

.edit{
  color: #eca613;
}

.delete{
  color: #fd0000;
}

.header-div{
  display: flex;
  flex-direction: row;
  align-items: center;
}

.options{
  display: flex;
  flex-wrap: nowrap;
}
</style>