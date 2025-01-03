import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";
import dotenv from "dotenv";


dotenv.config({ path: "../.env" });


export default defineConfig({
    mode: process.env.NODE_ENV || "development",
    plugins: [
        vue(),
        {
            name: "post-build",
            closeBundle() {
                const outputDir = resolve(__dirname, "../static");
                const indexPath = resolve(outputDir, "index.html");
                const tplPath = resolve(outputDir, "index.tpl");

                let indexContent = readFileSync(indexPath, "utf-8");
                const scriptTag = "<script>window.__config__={{config}}</script></body>";
                indexContent = indexContent.replace("</body>", scriptTag);

                writeFileSync(tplPath, indexContent);
            },
        },
    ],
    build: {
        outDir: "../static",
        emptyOutDir: true,
        rollupOptions: {
            output: {
                chunkFileNames: "js/[name].[hash].js",
                entryFileNames: "js/[name].[hash].js",
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name.endsWith(".css")) {
                        return "css/[name].[hash][extname]";
                    } else if (assetInfo.name.endsWith(".js")) {
                        return "js/[name].[hash][extname]";
                    } else {
                        return "assets/[name].[hash][extname]";
                    }
                },
            },
        },
    },
});
