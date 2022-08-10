/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React, {useState, useEffect} from 'react';
import {Line} from '@ant-design/plots';
import ToggleButton from './ToggleButton';
import '../style/LineGraph.css';
import '../style/loader.css';
import {useApiLine} from '../hooks/api';
import {useTranslation} from 'react-i18next';
import SelectShip from './SelectShip';
import {Modal, Tooltip} from 'antd';
import {FullscreenOutlined} from '@ant-design/icons';

const LineGraph = (props) => {
  const [itemData] = useState({});
  const [isToggled, setIsToggled] = useState(true);
  // for translating the text(no longer used)
  const {t} = useTranslation();
  // default value of the select ship
  const [shipName, setLineData] = useState('DM');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [data, setData] = useState([]);
  const {sendRequest, fetchedData, isLoading} = useApiLine();

  useEffect(() => {
    sendRequest(`${process.env.REACT_APP_FETCH_LINE}`);
  }, []);
  useEffect(() => {
    if (fetchedData !== undefined) {
      setData(fetchedData[shipName]);
      props.onChange(shipName);
    }
  }, [fetchedData, shipName]);

  // open modal
  const showModal = () => {
    setIsModalVisible(true);
  };
  // close modal
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // changing axis for checkedin and onboard data
  let yaxis = 'checkedin_couch';
  let xaxis = 'checkedin_time';
  if (isToggled) {
    xaxis = 'onboard_time';
    yaxis = 'onboard_couch';
  }
  const config = {
    data,

    xField: xaxis,
    yField: yaxis,

    xAxis: [
      {
        title: t('Time'),
        type: 'time',
        ticks: {
          min: '00:00',
          max: '23:00',
          interval: '1h',
        },
      },
    ],

    yAxis: [
      {
        ticks: {
          min: 0,
          max: 100,
          stepSize: 20,
        },
      },
    ],

    seriesField: 'voyage_id',

    legend: {
      position: 'top',
    },
    smooth: true,

    animation: {
      appear: {
        animation: 'path-in',
        duration: 2000,
      },
    },

    defaultColor: 'white',
  };

  return (
    <div>
      <div
        className='flex-row'
        style={{alignItems: 'start', marginBottom: '10px'}}
      >
        {t('line')}
        <div className='flex-row' style={{gap: '10px'}}>
          <Modal
            title={t('line')}
            visible={isModalVisible}
            onCancel={handleCancel}
            footer={null}
          >
            <div
              className='flex-row'
              style={{
                justifyContent: 'flex-end',
                marginBottom: '10px',
                gap: '10px',
              }}
            >
              <div className='flex-row' style={{gap: '10px'}}>
                <ToggleButton onToggled={setIsToggled} />
                <SelectShip onChange={setLineData} itemData={itemData} />
              </div>
            </div>
            <Line className='lineGraph' {...config} />
          </Modal>
          <ToggleButton onToggled={setIsToggled} />
          <SelectShip onChange={setLineData} itemData={itemData} />
          <Tooltip title="Full Screen">
            <span><FullscreenOutlined onClick={showModal} style={{border: '1px solid', borderRadius: '5px'}}/></span>
          </Tooltip>
        </div>
      </div>
      <Line
        loading={isLoading}
        className='lineGraph'
        data={{labels: ['00:00', '06.00', '12:00', '18:00']}}
        {...config}
      />
    </div>
  );
};
export default LineGraph;
