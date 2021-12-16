/*
 * @Date: 2021-11-29 12:06:35
 * @LastEditors: Aiva
 * @LastEditTime: 2021-12-16 17:35:19
 * @FilePath: \yilin-music-ops\src\views\Console\index.tsx
 */
import React, { FC, useState } from "react";
import { Layout, Menu } from "antd";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from "@ant-design/icons";
import "./index.scss";

const { Header, Sider, Content } = Layout;

const Console: FC = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const triggerHandler = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className="console-root">
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="logo" />
                    <Menu
                        theme="light"
                        mode="inline"
                        defaultSelectedKeys={["1"]}
                    >
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            nav 1
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                            nav 2
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined />}>
                            nav 3
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header
                        className="site-layout-background"
                        style={{ padding: 0 }}
                    >
                        {React.createElement(
                            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                            {
                                className: "trigger",
                                onClick: triggerHandler,
                            }
                        )}
                    </Header>
                    <Content className="site-layout-background console-main">
                        Content
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default Console;
