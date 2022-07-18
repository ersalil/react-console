import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/plots';
import ToggleButton from './ToggleButton';
import "../style/LineGraph.css";
import { UseApiLine } from '../hooks/api';
import { useTranslation } from "react-i18next";


import SelectShip from './SelectShip';

const DemoLine = () => {

    const [itemData, setItemData] = useState({});
    const [isToggled, setIsToggled] = useState(true);
    // const [shipName, setLineData] = useState("MAGIC");
    const { t } = useTranslation();
    const [shipName, setLineData] = useState("DREAM");

    // Data fetched for Table from Api.js
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if (isToggled) { console.log("On Board Data") }
        else console.log("Check In Data");
        UseApiLine(setData, setIsLoading, shipName);
    }, [shipName, isToggled]);

    const config = {
        data,
        xField: 'checkin_time',
        yField: 'checkin_counts',
        seriesField: 'ship',
        // yAxis: {
        // label: {
        //     // formatter: (v) => `${(v / 10e8).toFixed(1)} B`,
        // },
        // },
        legend: {
            position: 'top',
        },
        smooth: true,

        animation: {
            appear: {
                animation: 'path-in',
                duration: 5000,
            },
        },

        defaultColor: 'white'
    };
    if (isLoading) {
        return (
            <section>Loading...</section>
        );
    }
    return (
        <div>


            <div className="flex-row" style={{alignItems: "start", marginBottom: "10px"}}>
                {t("line")}
                <div className="flex-row" style={{gap: "10px"}}>

                    <ToggleButton onToggled={setIsToggled} />
                    <SelectShip onChange={setLineData} itemData={itemData} />
                </div>
            </div>
            <Line className="lineGraph" {...config} />

        </div>
    );
};
export default DemoLine;