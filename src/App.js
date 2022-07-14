import DemoColumn from "./components/BarGraph";
import DemoLine from "./components/LineGraph";
import TableView from "./components/TableView";
import { Layout } from 'antd';
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
     <Content className="content">2. LINE GRAPH</Content>
     <DemoLine />
     <Content className="content">3. BAR GRAPH</Content>

     <DemoColumn />
    </Layout>
  );
}
export default App;
