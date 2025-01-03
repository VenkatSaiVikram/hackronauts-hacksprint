import { defineStore } from "pinia";
import { ref } from "vue";
import { ConfigHolder } from "./utils/config-holder";
import { PAGES } from "./utils/constants";


const useStore = defineStore("store", () => {
    const isAuthorized = ref(ConfigHolder.isAuthorized);
    const currentPage = ref("home"); // home, term, roadmap
    const currentTermInfo = ref(null);

    function changeCurrentPage(page) {
        if (Object.keys(PAGES).some((key) => PAGES[key] === page)) {
            if (page === PAGES.HOME && currentTermInfo.value) {
                currentPage.value = PAGES.TERM;
            }
            currentPage.value = page;
        }
    }

    return {
        isAuthorized,
        currentPage,
        currentTermInfo,
        changeCurrentPage
    };
});


export default useStore;