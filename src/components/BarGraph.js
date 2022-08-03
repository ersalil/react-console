/* eslint-disable new-cap */
import React, {useState, useEffect} from 'react';
import {Column} from '@ant-design/plots';
import '../style/BarGraph.css';
import ToggleButton from './ToggleButton';
import {UseApiBar} from '../hooks/api';
import {useTranslation} from 'react-i18next';
import {Modal} from 'antd';
import {FullscreenOutlined} from '@ant-design/icons';

// column is generated according to data fetched
const DemoColumn = () => {
  const [isToggled, setIsToggled] = useState(true);
  const {t} = useTranslation(); // for translation(no longer used)
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // switch between checkedin and onboard data
  useEffect(() => {
    if (isToggled) {
      console.log('On Board Data');
    } else console.log('Check In Data');
    UseApiBar(setData, setIsLoading);
    console.log(data);
  }, [isToggled]);

  // open modal
  const showModal = () => {
    setIsModalVisible(true);
  };
  // close modal
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // changing axis for checkedin and onboard data
  let yaxis = 'avg_checkedin_couch';
  let xaxis = 'checkedin_time';
  if (isToggled) {
    yaxis = 'avg_onboard_couch';
    xaxis = 'onboard_time';
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

  return (
    <div>
      <div
        className='flex-row'
        style={{alignItems: 'start', marginBottom: '10px'}}
      >
        {/* heading of the graph */}
        {t('bar')}
        <div className='flex-row' style={{justifyContent: 'flex-end'}}>
          {/* modal button */}
          <Modal
            title='Busiest Hour of Embarkation'
            visible={isModalVisible}
            onCancel={handleCancel}
            footer={null}
          >
            <div
              className='flex-row'
              style={{
                justifyContent: 'flex-end',
                marginBottom: '10px',
              }}
            >
              <p>
                <ToggleButton onToggled={setIsToggled} />
              </p>
            </div>
            <Column className='barGraph' {...config} />
          </Modal>
          &nbsp;
          {/* toggle button */}
          <ToggleButton onToggled={setIsToggled} />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FullscreenOutlined onClick={showModal} />
        </div>
      </div>
      <Column loading={isLoading} className='barGraph' {...config} />
    </div>
  );
};

export default DemoColumn;
