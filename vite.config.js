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
                const outputDir = resolve(__dirname, "client");
                const packageJsonPath = resolve(outputDir, "client-package.json");

                const packageJsonContent = {
                    name: "term-track",
                    version: "0.0.1",
                    homepage: "index.html"
                };

                writeFileSync(packageJsonPath, JSON.stringify(packageJsonContent, null, 4));
            },
        },
    ],
    build: {
        outDir: "./client",
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
