/* eslint-disable new-cap */
/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, {useState, useEffect} from 'react';
import '../style/TableView.css';
import '../style/loader.css';
import {Table} from 'antd';
import {useApiTab, useApiCol} from '../hooks/api';

function TableView(props) {
  const [data, setData] = useState([]);
  const [colData, setColData] = useState([]);
  const {sendRequest, fetchedData, isLoading} = useApiTab();
  const {fetchColumn, fetchedColumn} = useApiCol();

  // fetch data from api
  useEffect(() => {
    sendRequest(`${process.env.REACT_APP_FETCH_TABLE_DATA}`);
  }, []);
  useEffect(() => {
    if (fetchedData !== undefined) {
      setData(fetchedData);
    }
  }, [fetchedData]);

  // fetch columns from api
  useEffect(() => {
    fetchColumn(`${process.env.REACT_APP_FETCH_TABLE_COL}`);
  }, []);
  useEffect(() => {
    if (fetchedColumn !== undefined) {
      setColData(fetchedColumn);
    }
  }, [fetchedColumn]);

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
