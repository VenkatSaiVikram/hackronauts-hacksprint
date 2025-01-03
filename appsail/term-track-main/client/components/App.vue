<script setup>
import useStore from '../store';
import Authentication from './Authentication.vue';
import Main from './Main.vue';

const store = useStore();
</script>

<template>
    <Main v-if="store.isAuthorized" />
    <Authentication v-else />
</template>