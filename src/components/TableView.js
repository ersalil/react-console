import React, { useState, useEffect } from "react";
import "../style/TableView.css";
import "../style/loader.css";
import { Table } from "antd";
import { UseApiTemp, UseColApi } from "../hooks/api";

function TableView(props) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //fetching data from api
  useEffect(() => {
    UseApiTemp(setData, setIsLoading);
  }, []);

  //filter data according to ship name
  const filter = [];
  console.log(data, props.shipName);
  for (const item of data) {
    if (item["code"] === props.shipName) {
      filter.push(item);
    }
  }
  console.log(filter);

  //columns fetched from Api.js
  const [colData, setColData] = useState([]);
  useEffect(() => {
    UseColApi(setColData);
  }, []);
  console.log(colData);

  //returning table
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
