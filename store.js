import { defineStore } from "pinia";
import { ref } from "vue";
import { ConfigHolder } from "./utils/config-holder";


const useStore = defineStore("store", () => {
    const isAuthorized = ref(ConfigHolder.isAuthorized);
    return {
        isAuthorized
    };
});


export default useStore;