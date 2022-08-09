/* eslint-disable new-cap */
/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, {useState, useEffect} from 'react';
import '../style/TableView.css';
import '../style/loader.css';
import {Table} from 'antd';
import {useApiTab} from '../hooks/api';

function TableView(props) {
  const [data, setData] = useState([]);
  const [colData, setColData] = useState([]);
  const {sendRequest, fetchedData, fetchedColumn, isLoading} = useApiTab();

  // fetch data from api
  useEffect(() => {
    sendRequest('http://127.0.0.1:8000');
  }, []);
  useEffect(() => {
    if (fetchedData !== undefined && fetchedColumn !== undefined) {
      setData(fetchedData);
      setColData(fetchedColumn);
    }
  }, [fetchedData]);

  // filter data according to ship name
  const filter = [];
  for (const item of data) {
    if (item['code'] === props.shipName) {
      filter.push(item);
    }
  }

  // returning table
  return (
    <Table
      loading={isLoading}
      rowClassName="table-view-bg"
      className="tableview"
      pagination={false}
      dataSource={filter}
      columns={colData}
    />
  );
}

export default TableView;
