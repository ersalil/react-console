// // Testing
// // import React, { useState, useEffect } from 'react';
// import { Column } from '@ant-design/plots';
// import '../style/BarGraph.css';
// import ToggleButton from './ToggleButton';
// import { useTranslation } from "react-i18next";

// const DemoColumn = () => {
//   const { t } = useTranslation();

//   const data = [
//     {
//       type: '1-3',
//       value: 0.16,
//     },
//     {
//       type: '4-10',
//       value: 0.125,
//     },
//     {
//       type: '11-30',
//       value: 0.24,
//     },
//     {
//       type: '31-60',
//       value: 0.19,
//     },
//     {
//       type: '1-3',
//       value: 0.22,
//     },
//     {
//       type: '3-10',
//       value: 0.05,
//     },
//     {
//       type: '10-30',
//       value: 0.01,
//     },
//     {
//       type: '30+',
//       value: 0.015,
//     },
//   ];
//   const paletteSemanticRed = '#F4664A';
//   const brandColor = '#5B8FF9';
//   const config = {
//     data,
//     xField: 'type',
//     yField: 'value',
//     seriesField: '',
//     color: ({ type }) => {
//       if (type === '10-30' || type === '30') {
//         return paletteSemanticRed;
//       }

//       return brandColor;
//     },
//     label: {
//       content: (originData) => {
//         const val = parseFloat(originData.value);

//         if (val < 0.05) {
//           return (val * 100).toFixed(1) + '%';
//         }
//       },
//       offset: 10,
//     },
//     legend: false,
//     xAxis: {
//       label: {
//         autoHide: true,
//         autoRotate: false,
//       },
//     },
//   };
//   return (
//     <div>

// <div className="flex-row" style={{alignItems: "start", marginBottom: "10px"}}>
//      {t("bar")}
//     <ToggleButton />
//     </div>
//   <Column className="barGraph" {...config} />
//     </div>
//   );
// };

// export default DemoColumn;

import React, { useState, useEffect } from "react";
import { Column } from "@ant-design/plots";
import "../style/BarGraph.css";
import ToggleButton from "./ToggleButton";
import { UseApiBar } from "../hooks/api";
import { useTranslation } from "react-i18next";
import { Button, Modal } from "antd";
import { FullscreenOutlined } from "@ant-design/icons";

const DemoColumn = () => {
  const [isToggled, setIsToggled] = useState(true);
  // const [shipName, setLineData] = useState("MAGIC");
  const { t } = useTranslation();

  const [isModalVisible, setIsModalVisible] = useState(false); //popup modal

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (isToggled) {
      console.log("On Board Data");
    } else console.log("Check In Data");
    UseApiBar(setData, setIsLoading);
    console.log(data);
  }, [isToggled]);

  //modal functions
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // const asyncFetch = () => {
  //   fetch('https://gw.alipayobjects.com/os/antfincdn/PC3daFYjNw/column-data.json')
  //     .then((response) => response.json())
  //     .then((json) => setData(json))
  //     .catch((error) => {
  //       console.log('fetch data failed', error);
  //     });
  // };
  var yaxis = "checkin_counts";
  var xaxis = "checkin_time";
  if (isToggled) {
    xaxis = "onboard_time";
    yaxis = "onboard_counts";
  }
  const config = {
    data,
    xField: xaxis,
    yField: yaxis,
    seriesField: "ship",
    isGroup: true,
    columnStyle: {
      radius: [20, 20, 0, 0],
    },
  };

  if (isLoading) {
    return <section>Loading...</section>;
  }

  return (
    <div>
      <div
        className="flex-row"
        style={{ alignItems: "start", marginBottom: "10px" }}
      >
        {t("bar")}
        <div className="flex-row" style={{ justifyContent: "flex-end" }}>
          <Modal
            title="Busiest Hour of Embarkation"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            width={1000}
            footer={null}
          >
            <div
              className="flex-row"
              style={{ justifyContent: "flex-end", marginBottom: "10px" }}
            >
              <p>
                <ToggleButton onToggled={setIsToggled} />
              </p>
            </div>
            <Column className="barGraph" {...config} />
          </Modal>
          &nbsp;
          <ToggleButton onToggled={setIsToggled} />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FullscreenOutlined onClick={showModal} />
        </div>
      </div>
      <Column className="barGraph" {...config} />
    </div>
  );
};

export default DemoColumn;
