<script setup>
import { onMounted, ref } from 'vue';

const isLoginFormLoading = ref(true);

onMounted(() => {
    const script1 = document.createElement('script');
    script1.src = "https://static.zohocdn.com/catalyst/sdk/js/4.4.0/catalystWebSDK.js";
    document.body.appendChild(script1);

    script1.onload = () => {
        const script2 = document.createElement('script');
        script2.src = "/__catalyst/sdk/init.js";
        document.body.appendChild(script2);

        script2.onload = () => {
            const config = {
                signin_providers_only: true,
                service_url: "/"
            };
            catalyst.auth.signIn("auth-container", config);
            setTimeout(() => {
                isLoginFormLoading.value = false;
            }, 2000);
        };
    };
});
</script>

<template>
    <main class="d-flex flex-column justify-content-center align-items-center">
        <div v-if="isLoginFormLoading" class="d-flex gap-2 justify-content-center align-items-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <span>Loading Authentication</span>
        </div>
        <div id="auth-container"></div>
    </main>
</template>