

import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/plots';
import '../style/BarGraph.css';
 import ToggleButton from './ToggleButton';
 import { UseApiBar } from '../hooks/api';
 import { useTranslation } from "react-i18next";



const DemoColumn = () => {
  

  const [isToggled, setIsToggled] = useState(true);
  const { t } = useTranslation();
  
  
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (isToggled) { console.log("On Board Data") }
        else console.log("Check In Data");
        UseApiBar(setData, setIsLoading);
        console.log(data);
    }, [isToggled]);

 
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
    seriesField: 'ship',
    isGroup: true,
    columnStyle: {
      radius: [20, 20, 0, 0],
    },
  };



  if (isLoading) {
    return (
        <section>Loading...</section>
    );
  }

   
    
  return (
    <div>

<div className="flex-row" style={{alignItems: "start", marginBottom: "10px"}}>
     {t("bar")}
     <ToggleButton onToggled={setIsToggled} />
  </div>
  <Column className="barGraph" {...config} />
    </div>
  );
};

export default DemoColumn;

