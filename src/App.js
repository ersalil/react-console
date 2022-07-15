import DemoColumn from "./components/BarGraph";
import DemoLine from "./components/LineGraph";
import TableView from "./components/TableView";
import { Layout, Col, Row } from 'antd';
import React from 'react';
import "./App.css";
// import LanguageButton from "./components/LanguageButton";
import i18n from '../src/translations/i18n';
import { useState } from "react";
import { useTranslation } from "react-i18next";

const { Header, Content } = Layout;

function App() {
  const { t } = useTranslation();
  const [language, setLanguage] = useState('en');
 
  function handleOnclick(e){
    e.preventDefault();
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  }

  return (
    <Layout>
      <Header className="header">
      <h1>{t("title")}</h1>
      </Header>
      <div><button value='en' onClick={handleOnclick}>
        English
     </button>

    <button value='zh' onClick={handleOnclick}>
    Spainsh
    </button></div>
     {/* <div className="graph">
      
     <Content className="content"></Content>
     
     <Content className="content"></Content>
     
     </div> */}
     <Row className="graph">
      <Col span={12} className="content">LINE GRAPH <DemoLine /></Col>
      <Col span={12} className="content">BAR GRAPH <DemoColumn /></Col>
    </Row>
    <Content className="content">TABLE VIEW</Content>
    <TableView />
    </Layout>
  )
}
export default App;
