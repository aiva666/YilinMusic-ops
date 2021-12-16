/*
 * @Date: 2021-09-18 10:44:06
 * @LastEditors: Aiva
 * @LastEditTime: 2021-12-16 16:22:42
 * @FilePath: \yilin-music-ops\src\routes\index.jsx
 */

import Login from "@/views/Login";
import Console from "@/views/Console";

const routes = [
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/console",
        element: <Console />,
    },
];

export default routes;
