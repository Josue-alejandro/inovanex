<template>
    <button class="dfButton">
        <slot />
    </button>
</template>

<style scoped>
.dfButton{
    font-weight: 500 ;
    background-color: #f8192c;
    color: white;
    border-radius: 5px;
    padding: 1em;
    border: none;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .875rem;
    letter-spacing: 2px;
    cursor: pointer;
}

</style>