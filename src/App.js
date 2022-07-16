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

function App() {
  const { t } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
 
  function handleOnclick(e){
    e.preventDefault();
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  }

  return (
    <Layout>
      <div className="header">
        <div className="empdiv"></div>
      <h1>{t("title")}</h1>
      <select id="language" value={language} onChange={handleOnclick}>
  <option value="en">English</option>
  <option value="zh">Spanish</option>

</select>
      </div>
      {/* <div> 
      <button className="btn" value='en' onClick={handleOnclick}>
        English
     </button>

    <button value='zh' onClick={handleOnclick}>
    Spanish
    </button>
    </div> */}    
     <Row className="graph">
      <Col span={1} className="content"></Col>
      <Col span={10} className="content"><DemoLine /></Col>
      <Col span={2} className="content"></Col>
      <Col span={10} className="content"><DemoColumn /></Col>
      <Col span={1} className="content"></Col>
    </Row>
    <Row>
    <Col span={1} className="content"></Col>
    <Col span={22} className="content1">{t("table")}<TableView /></Col>
    <Col span={1} className="content"></Col>

    </Row>
   
    </Layout>
  )
}
export default App;
