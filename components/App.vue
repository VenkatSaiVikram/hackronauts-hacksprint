<script setup>
import { onMounted } from 'vue';
import useStore from '../store';
import { PAGES } from '../utils/constants';
import TopNav from './TopNav.vue';
import Home from './Home.vue';
import Term from './Term.vue';
import NewTerm from './NewTerm.vue';
import RoadMap from './RoadMap.vue';

const store = useStore();

</script>

<template>
    <video autoplay muted loop id="video">
        <source src="../assets/background.webm" type="video/webm">
    </video>
    <main id="main">
        <TopNav />
        <main>
            <Home v-if="store.currentPage === PAGES.HOME" />
            <Term v-if="store.currentPage === PAGES.TERM" />
            <NewTerm v-if="store.currentPage === PAGES.NEW_TERM" />
            <RoadMap v-if="store.currentPage === PAGES.ROADMAP" />
        </main>
    </main>
    <!-- <Main v-if="store.isAuthorized" /> -->
    <!-- <Authentication v-else /> -->
</template>