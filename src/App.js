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
      <Col span={12} className="content">1. LINE GRAPH <DemoLine /></Col>
      <Col span={12} className="content">2. BAR GRAPH <DemoColumn /></Col>
    </Row>
    <h1 className="content">3. TABLE VIEW</h1>
     <TableView />
    </Layout>
  )
}
export default App;
