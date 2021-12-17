/*
 * @Author: Aiva
 * @Date: 2021-12-17 10:22:25
 * @LastEditors: Aiva
 * @LastEditTime: 2021-12-17 16:06:56
 * @Description:
 * @FilePath: \yilin-music-ops\src\views\Console\Home\index.tsx
 */
import React, { FC, useState } from "react";
import { Avatar, Button } from "antd";
import StatisticalCard from "./Components/StatisticalCard";
import { RiseOutlined, TeamOutlined } from "@ant-design/icons";
import "./index.scss";

// 用户统计数据类型
type TUserStatisticalInfo = {
    todayIncrement: number;
    yesterdayIncrement: number;
    weekIncrement:number,
    allUserNumber: number;
};

// 用户统计数据List类型
type TUserStatisticalInfoList = {
    title: string;
    count: number;
    desc: string;
    icon: React.ReactNode;
};

// 用于计算用户统计数据
const transformMap = {
    todayIncrement: {
        icon: <RiseOutlined />,
        desc: "今日新增",
    },
    yesterdayIncrement: {
        icon: <RiseOutlined />,
        desc: "昨日新增",
    },
    weekIncrement: {
        icon: <RiseOutlined />,
        desc: "本周新增",
    },
    allUserNumber: {
        icon: <TeamOutlined />,
        desc: "累计注册用户",
    },
};

const Home: FC = () => {
    // 用户统计数据
    const [userStatisticalInfo, setUserStatisticalInfo] =
        useState<TUserStatisticalInfo>({
            todayIncrement: 0,
            yesterdayIncrement: 0,
            weekIncrement:0,
            allUserNumber: 0,
        });

    // 用户统计数据转为list
    const userStatisticalInfoList = (): TUserStatisticalInfoList[] => {
        const arr: TUserStatisticalInfoList[] = [];
        for (const key in userStatisticalInfo) {
            if (
                Object.prototype.hasOwnProperty.call(userStatisticalInfo, key)
            ) {
                const element: number = userStatisticalInfo[key];
                const info = transformMap[key];
                arr.push({
                    ...info,
                    title: element,
                });
            }
        }
        return arr;
    };
    return (
        <div className="console-home">
            {/* 欢迎语 Start */}

            <header>
                <div className="header-welcome">
                    <Avatar size={80} />
                    <div>
                        <p>愿你所愿，终能实现</p>
                        <h3>早上好，Aiva！</h3>
                    </div>
                </div>
                <div className="btns">
                    <Button type="primary" size="large" ghost>
                        个人中心
                    </Button>
                    <Button type="primary" size="large" ghost>
                        修改密码
                    </Button>
                </div>
            </header>

            {/* 欢迎语 End */}

            {/* 用户统计 Start */}

            <section>
                <div className="section-user-statistical">
                    {userStatisticalInfoList().map(item => (
                        <div key={item.title}>
                            <StatisticalCard
                                title={item.title}
                                icon={item.icon}
                                desc={item.desc}
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* 用户统计 End */}
        </div>
    );
};
export default Home;
