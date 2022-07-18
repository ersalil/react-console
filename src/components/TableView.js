import React, { useState, useEffect } from 'react';
import '../style/TableView.css';
import '../style/loader.css';
import {Col, Table} from 'antd';
import {UseApi, UseColApi} from '../hooks/api';
import { ApiFilled } from '@ant-design/icons';

function TableView() {
  // Data fetched for Table from Api.js
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      UseApi(setData,setIsLoading);
    }, []);
    console.log(data);

  // Columns fetched from Api.js
    const [colData, setColData] = useState([]);
    useEffect(() => {
      UseColApi(setColData);
    }, []);
    console.log(colData);

  // Loader is applied while the data is fetched
    if (isLoading) {
      return <div className='loader'></div>
    }
  
  // Returning all the data to Table View
    return(
          <Table className='tableview' pagination={false} dataSource={data} columns={colData} />
    );
}
export default TableView;
