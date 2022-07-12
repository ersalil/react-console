import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/plots';
import DropDown from './DropDown';

const DemoLine = () => {
    const [data, setData] = useState([]);
    const [itemData, setItemData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [shipName, setLineData] = useState("China");
    // const lineData = (key) => {console.log('lineGarph',key)} ;
    
    useEffect(() => {
        asyncFetch();
    }, [shipName]);
    
    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/bmw-prod/e00d52f4-2fa6-47ee-a0d7-105dd95bde20.json')
        .then((response) => response.json())
        .then((json) => {
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
        // @TODO 后续会换一种动画方式
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
            <DropDown onChange={setLineData} itemData={itemData}/>
            <Line {...config} />
            
        </div>
    );
};
export default DemoLine;