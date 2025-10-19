import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
    root: "public", // 기본 폴더 (여기서 index.html 또는 pages 불러옴)
    resolve: {
        alias: {
            "@component": path.resolve(__dirname, "public/component"),
            "@pages": path.resolve(__dirname, "public/pages"),
            "@common": path.resolve(__dirname, "public/component/common")
        }
    },
    server: {
        port: 3000,
        open: true
    }
});
