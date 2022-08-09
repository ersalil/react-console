/* eslint-disable new-cap */
import React, {useState, useEffect} from 'react';
import {Column} from '@ant-design/plots';
import '../style/BarGraph.css';
import ToggleButton from './ToggleButton';
import {useApiBar} from '../hooks/api';
import {useTranslation} from 'react-i18next';
import {Modal} from 'antd';
import {FullscreenOutlined} from '@ant-design/icons';

const BarGraph = () => {
  const [isToggled, setIsToggled] = useState(true);
  const {t} = useTranslation(); // for translation(no longer used)
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [data, setData] = useState([]);
  const {sendRequest, fetchedData, isLoading} = useApiBar();

  // fetch data from api
  useEffect(() => {
    sendRequest('http://127.0.0.1:8000');
  }, []);
  useEffect(() => {
    if (fetchedData !== undefined) {
      setData(fetchedData);
    }
  }, [fetchedData]);

  // open modal
  const showModal = () => {
    setIsModalVisible(true);
  };
  // close modal
  const closeModal = () => {
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
        <div className='flex-row' style={{gap: '10px'}}>
          {/* modal button */}
          <Modal
            title={t('bar')}
            visible={isModalVisible}
            onCancel={closeModal}
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
          {/* toggle button */}
          <ToggleButton onToggled={setIsToggled} />
          <FullscreenOutlined onClick={showModal} style={{border: '1px solid', borderRadius: '5px'}}/>
        </div>
      </div>
      <Column loading={isLoading} className='barGraph' {...config} />
    </div>
  );
};

export default BarGraph;
