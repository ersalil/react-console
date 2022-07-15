import DemoColumn from "./components/BarGraph";
import DemoLine from "./components/LineGraph";
import TableView from "./components/TableView";
import { Layout, Col, Row } from 'antd';
import React from 'react';
import "./App.css";

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header className="header">
      <h1>EMBARKATION MONITORING</h1>
      </Header>
     {/* <div className="graph">
      
     <Content className="content"></Content>
     
     <Content className="content"></Content>
     
     </div> */}
     <Row className="graph">
      <Col span={12} className="content">LINE GRAPH <DemoLine /></Col>
      <Col span={12} className="content">BAR GRAPH <DemoColumn /></Col>
    </Row>
    <Content className="content">1. TABLE VIEW</Content>
    <TableView />
    </Layout>
  )
}
export default App;
