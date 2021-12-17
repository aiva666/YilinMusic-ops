/*
 * @Date: 2021-09-18 10:44:06
 * @LastEditors: Aiva
 * @LastEditTime: 2021-12-17 14:26:05
 * @FilePath: \yilin-music-ops\src\routes\index.tsx
 */

// 登录
import Login from "@/views/Login";

// 控制台---根页面
import Console from "@/views/Console";
// 控制台---首页
import Home from "@/views/Console/Home";

import { RouteObject } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";

export interface TRouterConfig extends RouteObject {
    title: string;
    icon: React.ReactNode;
    name: string;
    hideInMenu?: boolean;
    children?: TRouterConfig[];
}

interface TRouterEnum {
    [props: string]: TRouterConfig;
}

const routerEnum: TRouterEnum = {
    "/": {
        title: "请登录",
        icon: null,
        name: "login",
    },
    "/console": {
        title: "控制台",
        icon: null,
        name: "console",
    },
    "/console/home": {
        title: "首页",
        icon: <HomeOutlined />,
        name: "home",
    },
};

export const routeConfig: RouteObject[] = [
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/console",
        element: <Console />,
        children: [
            {
                path: "home",
                element: <Home />,
            },
        ],
    },
];

type TdeepInitMenuConfig = (
    routers: RouteObject[],
    prefix?: string
) => TRouterConfig[];
const deepInitMenuConfig: TdeepInitMenuConfig = (routers, prefix = "") =>
    routers.map(item => {
        const path: string = prefix + item.path;
        const { title, icon, name,} = routerEnum[path];
        const response: TRouterConfig = {
            path,
            title,
            icon,
            name,
        };
        if (item.children) {
            response.children = deepInitMenuConfig(item.children, `${path}/`);
        }
        return response;
    });

export const menuConfig = deepInitMenuConfig(routeConfig[1]["children"] as RouteObject[], "/console/")
