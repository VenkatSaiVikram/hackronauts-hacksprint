<script setup>
import useStore from '../store';
import { PAGES } from '../utils/constants';
const store = useStore();
</script>

<template>
    <header class="d-flex fs-2 p-2 justify-content-between">
        <div>
            <button @click="store.changeCurrentPage(PAGES.HOME)" class="d-flex btn flex-column align-items-center bg-white p-2 text-black rounded-3">
                <i class="bi bi-house-door fs-2 header-icon d-flex align-items-center justify-content-center"></i>
            </button>
        </div>
        <div>
            <button type="button" class="d-flex btn flex-column align-items-center bg-white p-2 text-black rounded-3" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-person fs-2 header-icon d-flex align-items-center justify-content-center"></i>
            </button>
            <ul class="dropdown-menu">
                <li class="dropdown-item">
                    Account Info
                </li>
                <li><hr class="dropdown-divider"></li>
                <li class="dropdown-item">Logout</li>
            </ul>
        </div>
    </header>
</template>