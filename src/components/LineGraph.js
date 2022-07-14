import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/plots';
import DropDown from './DropDown';
import ToggleButton from './ToggleButton';
import "./LineGraph.css";

const DemoLine = () => {
    const [data, setData] = useState([]);
    const [itemData, setItemData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isToggled, setIsToggled] = useState(true);
    const [shipName, setLineData] = useState("China");
    
    useEffect(() => {
        asyncFetch();
    }, [shipName, isToggled]);
    
    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/bmw-prod/e00d52f4-2fa6-47ee-a0d7-105dd95bde20.json')
        .then((response) => response.json())
        .then((json) => {
            if(isToggled) {console.log("On Board Data")}
            else console.log("Check In Data");
            setItemData(json.at(-1));
            json.splice(json.length-1,1);
            setData(json.filter((item)=>{ return item.name === shipName}));
            setIsLoading(false);
        })
        .catch((error) => {
            console.log('fetch data failed', error);
        });
    };

    const config = {
        data,
        xField: 'year',
        yField: 'gdp',
        seriesField: 'name',
        yAxis: {
        label: {
            formatter: (v) => `${(v / 10e8).toFixed(1)} B`,
        },
        },
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
            <DropDown onChange={setLineData} itemData={itemData}/><ToggleButton onToggled={setIsToggled}/> </div>
            <Line className="lineGraph" {...config} />
            
        </div>
    );
};
export default DemoLine;