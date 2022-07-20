import DemoColumn from "./components/BarGraph";
import DemoLine from "./components/LineGraph";
import TableView from "./components/TableView";
import { Layout, Col, Row } from 'antd';
import React from 'react';
import "./App.css";
import "./style/Common.css"
// import LanguageButton from "./components/LanguageButton";
import i18n from '../src/translations/i18n';
import { useState } from "react";
import { useTranslation } from "react-i18next";

const { Header, Content } = Layout;
document.body.style.backgroundColor = "#f3f3f3";
function App() {
  const { t } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const [ship, setShipName] = useState("DREAM");
 
  function handleOnclick(e){
    e.preventDefault();
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  }

  document.body.style.backgroundColor = "#f3f3f3";

  return (
    
    <Layout>
      <div className="background">
      <div className="header">
      <h1 className="head">{t("title")}</h1>
      </div>
     <Row className="graph">
      <Col span={1} className="space"></Col>
      <Col span={10} className="content"><DemoLine onChange={setShipName}/></Col>
      <Col span={2} className="space"></Col>
      <Col span={10} className="content"><DemoColumn /></Col>
      <Col span={1} className="space"></Col>
    </Row>
    <Row>
    <Col span={1} className="space"></Col>
    <Col span={22} className="content1">{t("table")}<TableView shipName={ship}/></Col>
    <Col span={1} className="space"></Col>

    </Row>
    </div>
    </Layout>
    
  )
}
export default App;
