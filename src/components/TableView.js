import React, { useState, useEffect } from 'react';
import '../style/TableView.css';
import '../style/loader.css';
import { Table } from 'antd';
import { UseApiTemp, UseColApi} from '../hooks/api';

function TableView(props) {
  // Data fetched for Table from Api.js
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      UseApiTemp(setData,setIsLoading);
    }, []);

    const filter = [];
    console.log(data, props.shipName)
    for (const item of data) {if (item['code'] === props.shipName) {filter.push(item)}};
    console.log(filter)

  // Columns fetched from Api.js
    const [colData, setColData] = useState([]);
    useEffect(() => {
      UseColApi(setColData);
    }, []);
    console.log(colData);

  // Loader is applied while the data is fetched
    // if (isLoading) {
    //   return <div className='loader'></div>
    // }
    
  // Returning all the data to Table View
    return(
          <Table loading={isLoading} rowClassName='table-view-bg' className='tableview' pagination={false} dataSource={filter} columns={colData} />
    );
}

export default TableView;
