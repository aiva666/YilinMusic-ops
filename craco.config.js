/*
 * @Date: 2021-11-18 09:20:51
 * @LastEditors: Aiva
 * @LastEditTime: 2021-12-16 15:13:50
 * @FilePath: \cra-project-template\craco.config.ts
 */
const CracoLessPlugin = require("craco-less");
const themeConfig = require("./theme.config");
const path = require("path");

const resolve = dir => path.resolve(__dirname, dir);
module.exports = {
    devServer:{
        port:8080,
        // proxy:{
        //     "/api":{
        //         target:"http://localhost:8000",
        //         changeOrigin:true,
        //         pathRewrite:{
        //             "^/api":""
        //         }
        //     }
        // }
    },
    webpack: {
        alias: {
            "@": resolve("src"),
            "~": resolve("node_modules"),
        },
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: themeConfig,
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};
