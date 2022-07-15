import DemoColumn from "./components/BarGraph";
import DemoLine from "./components/LineGraph";
import TableView from "./components/TableView";
import { Layout, Col, Row } from 'antd';
import React from 'react';
import "./App.css";
import TranslationTest from "../src/components/TranslationTest";
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
      <h1>EMBARKATION MONITORING</h1>
      </Header>
      <div><button value='en' onClick={handleOnclick}>
        English
     </button>

<button value='zh' onClick={handleOnclick}>
 Chinese
</button></div>
      <TranslationTest />
     <Content className="content">1. TABLE VIEW
     </Content>
     <TableView />
     <Row className="graph">
      <Col span={12} className="content">2. LINE GRAPH <DemoLine /></Col>
      <Col span={12} className="content">3. BAR GRAPH <DemoColumn /></Col>
    </Row>
    </Layout>
  )
}
export default App;
