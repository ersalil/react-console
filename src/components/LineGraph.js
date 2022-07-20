import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/plots';
import ToggleButton from './ToggleButton';
import "../style/LineGraph.css";
import '../style/loader.css';
import { UseApiLine } from '../hooks/api';
import { useTranslation } from "react-i18next";
import SelectShip from './SelectShip';

const DemoLine = (props) => {

    const [itemData, setItemData] = useState({});
    const [isToggled, setIsToggled] = useState(true);
    const { t } = useTranslation();
    const [shipName, setLineData] = useState("DREAM");

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if (isToggled) { console.log("On Board Data") }
        else console.log("Check In Data");
        UseApiLine(setData, setIsLoading, shipName);
        props.onChange(shipName);
    }, [shipName, isToggled]);

    
    var yaxis = 'checkin_counts';
    var xaxis = 'checkin_time';
    if(isToggled) { 
        xaxis = 'onboard_time'
        yaxis = 'onboard_counts';
    }
    const config = {
        data,
        xField: xaxis,
        yField: yaxis,
        
        seriesField: 'key',
        
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
            <div className='loader'></div>
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