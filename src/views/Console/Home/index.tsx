/*
 * @Author: Aiva
 * @Date: 2021-12-17 10:22:25
 * @LastEditors: Aiva
 * @LastEditTime: 2021-12-20 16:08:53
 * @Description:
 * @FilePath: \yilin-music-ops\src\views\Console\Home\index.tsx
 */
import React, { FC, useState } from "react";
import { Avatar, Button, Typography, Row, Col } from "antd";
import {
    Line,
    LineConfig,
    Column,
    ColumnConfig,
    Pie,
    PieConfig,
    Datum,
} from "@ant-design/charts";
import StatisticalCard from "./Components/StatisticalCard";
import { RiseOutlined, TeamOutlined } from "@ant-design/icons";
import "./index.scss";

// 用户统计数据类型
type TUserStatisticalInfo = {
    todayIncrement: number;
    yesterdayIncrement: number;
    weekIncrement: number;
    allUserNumber: number;
};

// 用户统计数据List类型
type TUserStatisticalInfoList = {
    title: string;
    count: number;
    desc: string;
    icon: React.ReactNode;
};

// 图表配置类型
type TChartConfig = {
    userIncrement: LineConfig;
    accessCount: ColumnConfig;
    genderInfo: PieConfig;
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
            weekIncrement: 0,
            allUserNumber: 0,
        });

    // 用户增长趋势数据
    const [userIncrement, setUserIncrementData] = useState([
        { month: "2021-01", value: 38 },
        { month: "2021-02", value: 52 },
        { month: "2021-03", value: 61 },
        { month: "2021-04", value: 45 },
        { month: "2021-05", value: 54 },
        { month: "2021-06", value: 65 },
        { month: "2021-07", value: 51 },
        { month: "2021-08", value: 39 },
        { month: "2021-09", value: 77 },
        { month: "2021-10", value: 58 },
        { month: "2021-11", value: 74 },
        { month: "2021-12", value: 88 },
    ]);

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

    // 图表配置
    const chartConfig: TChartConfig = {
        // 用户增加趋势
        userIncrement: {
            data: userIncrement,
            xField: "month",
            padding: 26,
            yField: "value",
            point: {
                size: 5,
            },
            smooth: true,
            tooltip: {
                formatter: (datum: Datum) => ({
                    name: "增长量",
                    value: datum.value,
                }),
            },
        },
        // 平台访问量
        accessCount: {
            data: userIncrement,
            xField: "month",
            padding: 26,
            yField: "value",
            label: {
                // 可手动配置 label 数据标签位置
                position: "middle",
                // 'top', 'bottom', 'middle',
                // 配置样式
                style: {
                    fill: "#FFFFFF",
                    opacity: 0.6,
                },
            },
            xAxis: {
                label: {
                    autoHide: true,
                    autoRotate: false,
                },
            },
            meta: {
                month: {
                    alias: "日期",
                },
                value: {
                    alias: "访问量",
                },
            },
        },
        // 性别分布
        genderInfo: {
            appendPadding: 10,
            data:userIncrement.slice(0,3),
            angleField: "value",
            colorField: "month",
            padding:26,
            radius: 1,
            innerRadius: 0.6,
            label: {
                type: "inner",
                offset: "-50%",
                content: "{value}",
                style: {
                    textAlign: "center",
                    fontSize: 14,
                },
            },
            interactions: [
                {
                    type: "element-selected",
                },
                {
                    type: "element-active",
                },
            ],
            statistic: {
                title: false,
                content: undefined,
            },
        },
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
                        <div key={item.desc}>
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

            {/* 用户增加趋势 Start */}

            <section className="section-user-incrementOfLatestMonth container-card">
                <Typography.Title level={4}>用户增长趋势</Typography.Title>
                <Line
                    style={{ backgroundColor: "#fff" }}
                    {...chartConfig.userIncrement}
                />
            </section>

            {/* 用户增加趋势 End */}

            <section>
                <Row gutter={26}>
                    <Col span={16}>
                        <div className="container-card">
                            <Typography.Title level={4}>
                                平台访问量
                            </Typography.Title>
                            <Column
                                {...chartConfig.accessCount}
                            />
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="container-card">
                            <Typography.Title level={4}>
                                用户性别
                            </Typography.Title>
                            <Pie
                                {...chartConfig.genderInfo}
                            />
                        </div>
                    </Col>
                </Row>
            </section>
        </div>
    );
};
export default Home;
