/*
 * @Date: 2021-09-18 10:44:06
 * @LastEditors: Aiva
 * @LastEditTime: 2021-11-29 14:55:25
 * @FilePath: \yilin-music-ops\src\routes\index.jsx
 */

import Login from '@/views/Login'
import Console from '@/views/Console'
// import { RouteObject } from 'react-router'

const routes = [
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/console',
        element: <Console />,
    },
]

export default routes