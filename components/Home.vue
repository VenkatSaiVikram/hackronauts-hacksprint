<script setup>
import useStore from '../store';
import { PAGES } from '../utils/constants';

const store = useStore();
</script>

<template>
    <article class="d-flex flex-column justify-content-center align-items-center w-100 h-100">
        <h1 id="home-title">TERM TRACK - AI</h1>
        <p class="text-center">Do not dwell in the past,  do not dream of the future,<br />concentrate the mind on the present moment.</p>
        <button @click="store.changeCurrentPage(PAGES.NEW_TERM)" type="button" class="btn bg-white text-black">New Term Track</button>
    </article>
</template>