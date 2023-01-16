<script lang="ts" src="./MyLocationBtn.ts"></script>

<template>
    <button v-if="isBotonReady" class="btn btn-primary"
        @click="onMyLocationClicked">Ir a mi ubicación</button>
</template>

<style scoped>
button{
    position:fixed;
    top:30px;
    right: 30px;
}
</style>