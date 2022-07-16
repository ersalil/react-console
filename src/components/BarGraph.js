// Testing
// import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/plots';
import '../style/BarGraph.css';
import ToggleButton from './ToggleButton';
import { useTranslation } from "react-i18next";



const DemoColumn = () => {
  const { t } = useTranslation();


  const data = [
    {
      type: '1-3',
      value: 0.16,
    },
    {
      type: '4-10',
      value: 0.125,
    },
    {
      type: '11-30',
      value: 0.24,
    },
    {
      type: '31-60',
      value: 0.19,
    },
    {
      type: '1-3',
      value: 0.22,
    },
    {
      type: '3-10',
      value: 0.05,
    },
    {
      type: '10-30',
      value: 0.01,
    },
    {
      type: '30+',
      value: 0.015,
    },
  ];
  const paletteSemanticRed = '#F4664A';
  const brandColor = '#5B8FF9';
  const config = {
    data,
    xField: 'type',
    yField: 'value',
    seriesField: '',
    color: ({ type }) => {
      if (type === '10-30' || type === '30') {
        return paletteSemanticRed;
      }

      return brandColor;
    },
    label: {
      content: (originData) => {
        const val = parseFloat(originData.value);

        if (val < 0.05) {
          return (val * 100).toFixed(1) + '%';
        }
      },
      offset: 10,
    },
    legend: false,
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
  };
  return (
    <div>

<div className="flex-row" style={{alignItems: "start", marginBottom: "10px"}}>
     {t("bar")}
    <ToggleButton />
    </div>
  <Column className="barGraph" {...config} />
    </div>
  );
};

export default DemoColumn;
