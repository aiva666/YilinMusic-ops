/*
 * @Author: Aiva
 * @Date: 2021-12-20 16:12:48
 * @LastEditors: Aiva
 * @LastEditTime: 2021-12-20 16:35:19
 * @Description:
 * @FilePath: \yilin-music-ops\src\views\Console\MusicLibrary\index.tsx
 */
import React, { FC } from "react";
import { View } from "sd-components-react";

const MusicLibrary: FC = () => {
    const tableColumns = [
        {
            title:"歌曲名称",
            dataIndex:"name",
            align:"center" as "center",
            ellipsis:true,
        },
        {
            title:"歌手",
            dataIndex:"singer",
            align:"center" as "center",
            ellipsis:true,
            hideInSearch:true,
        },
        {
            title:"专辑",
            dataIndex:"album",
            align:"center" as "center",
            ellipsis:true,
            hideInSearch:true,
        },
        {
            title:"时长",
            dataIndex:"timer",
            align:"center" as "center",
            ellipsis:true,
            hideInSearch:true,
        },
    ];
    return (
        <div className="MusicLibrary">
            <View
                columns={tableColumns}
                rowKey="id"
                tableCheckbox={false}
                request={() => ({ data: [] })}
                onAdd={() => ({})}
                onEdit={() => ({})}
                onRemove={() => ({})}
            />
        </div>
    );
};
export default MusicLibrary;
