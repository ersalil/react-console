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
     <Content className="content">1. TABLE VIEW</Content>
     <TableView />
     {/* <div className="graph">
      
     <Content className="content"></Content>
     
     <Content className="content"></Content>
     
     </div> */}
     <Row className="graph">
      <Col span={12} className="content">2. LINE GRAPH <DemoLine /></Col>
      <Col span={12} className="content">3. BAR GRAPH <DemoColumn /></Col>
    </Row>
    </Layout>
  )
}
export default App;
