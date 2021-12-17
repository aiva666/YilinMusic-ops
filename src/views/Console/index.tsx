/*
 * @Date: 2021-11-29 12:06:35
 * @LastEditors: Aiva
 * @LastEditTime: 2021-12-17 14:32:28
 * @FilePath: \yilin-music-ops\src\views\Console\index.tsx
 */
/* eslint react-hooks/exhaustive-deps:off */
/* eslint no-constant-condition:off */
import React, { FC, useState, useEffect } from "react";
import { Layout, Menu, Avatar } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { TRouterConfig, menuConfig } from "@/routes";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "./index.scss";

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const Console: FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { pathname } = location;

    // 左侧菜单折叠控制
    const [collapsed, setCollapsed] = useState<boolean>(false);
    // 当前选择的菜单
    const [activeMenuKey, setActiveMenuKey] = useState<string[]>([]);
    // 重定向
    const redirectFromList = ["/console", "/console/"];
    const redirectToRoute = "/console/home";
    // 路由初始化
    useEffect(() => {
        setActiveMenuKey([pathname]);
        if (redirectFromList.includes(pathname)) {
            navigate(redirectToRoute);
        }
    }, [pathname]);

    // 左侧菜单折叠事件
    const triggerHandler = () => {
        setCollapsed(!collapsed);
    };
    // 用户资料渲染
    const UserInfo = true ? (
        <>
            <span>欢迎您！Aiva</span>
            &emsp;
            <Avatar />
        </>
    ) : (
        <>
            <span>请登录</span>
            &emsp;
            <Avatar />
        </>
    );

    // 菜单渲染
    const menuRender = (routerConfig: TRouterConfig[]): React.ReactNode =>
        routerConfig
            .filter(item => !item.hideInMenu)
            .map(item =>
                item.children ? (
                    <SubMenu title={item.title} key={item.path}>
                        {menuRender(item.children)}
                    </SubMenu>
                ) : (
                    <Menu.Item key={item.path} icon={item.icon}>
                        {item.title}
                    </Menu.Item>
                )
            );
    return (
        <div className="console-root">
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="logo" />
                    <Menu
                        theme="light"
                        mode="inline"
                        selectedKeys={activeMenuKey}
                    >
                        {menuRender(menuConfig)}
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-header">
                        <div>
                            <span className="trigger">
                                {React.createElement(
                                    collapsed
                                        ? MenuUnfoldOutlined
                                        : MenuFoldOutlined,
                                    {
                                        onClick: triggerHandler,
                                    }
                                )}
                            </span>
                            {/* <span>2021-12-21</span> */}
                        </div>
                        <div style={{ width: 200 }}>
                            <Menu mode="horizontal">
                                <SubMenu title={UserInfo} key="user">
                                    <Menu.Item key="profile">
                                        个人中心
                                    </Menu.Item>
                                    <Menu.Item key="logout">退出系统</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </div>
                    </Header>
                    <Content className="console-main">
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default Console;
