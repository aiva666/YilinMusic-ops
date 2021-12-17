/*
 * @Author: Aiva
 * @Date: 2021-12-17 15:08:24
 * @LastEditors: Aiva
 * @LastEditTime: 2021-12-17 16:02:08
 * @Description:
 * @FilePath: \yilin-music-ops\src\views\Console\Home\Components\StatisticalCard\index.tsx
 */
import React, { FC, ReactNode } from "react";
import "./index.scss"

type TProps = {
    icon: ReactNode;
    title: string;
    desc: string;
};

const StatisticalCard: FC<TProps> = props => (
    <div className="statistical-card">
        <div className="statistical-card-icon">{props.icon}</div>
        <div className="statistical-card-text">
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
        </div>
    </div>
);

export default StatisticalCard;
