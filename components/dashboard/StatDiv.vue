<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    data: {
        type: String,
        required: true
    }
})
</script>

<template>
    <UiDivBox class="stat-div">
        <div>
            <slot></slot>
        </div>
        <div>
            <p class="stat-title">{{ title }}</p>
            <p class="stat-number">{{ data }}</p>
        </div>
    </UiDivBox>
</template>

<style scoped>
.stat-title{
    margin-bottom: 5px;
}

.stat-number{
    font-weight: 700;
}

.stat-div{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    min-width: 180px;
    padding: 1em;
    color: rgb(104, 103, 103)
}
</style>