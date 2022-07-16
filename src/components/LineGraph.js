import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/plots';
import DropDown from './DropDown';
import ToggleButton from './ToggleButton';
import "../style/LineGraph.css";
import { UseApiLine } from '../hooks/api';
import SelectShip from './SelectShip';
 
const DemoLine = () => {
    
    const [itemData, setItemData] = useState({});
    const [isToggled, setIsToggled] = useState(true);
    const [shipName, setLineData] = useState("DREAM");
    
    // Data fetched for Table from Api.js
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if(isToggled) {console.log("On Board Data")}
        else console.log("Check In Data");
      UseApiLine(setData,setIsLoading, shipName);
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
    };
    if (isLoading) {
        return (
            <section>Loading...</section>
        );
    }
    return (
        <div>
            <div className="button-row">
            <SelectShip onChange={setLineData} itemData={itemData}/>
            <ToggleButton onToggled={setIsToggled}/> </div>
            <Line className="lineGraph" {...config} />
            
        </div>
    );
};
export default DemoLine;