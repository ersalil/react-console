import React, { useState, useEffect } from 'react';
import './TableView.css';
import {Table} from 'antd';

function TableView() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        asyncFetch();
    }, []);
    
    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/bmw-prod/e00d52f4-2fa6-47ee-a0d7-105dd95bde20.json')
        .then((response) => response.json())
        .then((json) => {
            setData(json);
            setIsLoading(false);
        })
        .catch((error) => {
            console.log('fetch data failed', error);
        });
    };

    const columns = [
      
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'GDP',
        dataIndex: 'gdp',
        key: 'gdp',
      },
      {
        title: 'Year',
        dataIndex: 'year',
        key: 'year',
      },
      {
        title: 'Year',
        dataIndex: 'year',
        key: 'year',
      },
      {
        title: 'Year',
        dataIndex: 'year',
        key: 'year',
      },
      {
        title: 'Year',
        dataIndex: 'year',
        key: 'year',
      },
    ];

    if (isLoading) {
      return <section>Loading...</section>
    }
      
    return(
          <Table className='tableview' dataSource={data} columns={columns} />
    );
}
export default TableView;
