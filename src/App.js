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
import PopUp from './components/PopUp';
import { Button } from 'antd';

const { Header, Content } = Layout;
document.body.style.backgroundColor = "#f3f3f3";
function App() {
  const { t } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const [buttonPopup1, setButtonPopup1] = useState(false);
  const [buttonPopup2, setButtonPopup2] = useState(false);
 
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
        {/* <div className="empdiv"></div> */}
      <h1 className="head">{t("title")}</h1>
      {/* <select id="language" value={language} onChange={handleOnclick}>
        <option value="en">English</option>
        <option value="zh">Spanish</option>
      </select> */}
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
      <Col span={1} className="space"></Col>
      <Col span={10} className="content"><Button onClick={() => setButtonPopup1(true)}>Expand</Button><br/><DemoLine /></Col>
      <Col span={2} className="space"></Col>
      <Col span={10} className="content"><Button onClick={() => setButtonPopup2(true)}>Expand</Button><br/><DemoColumn /></Col>
      <Col span={1} className="space"></Col>
    </Row>
    <Row>
    <Col span={1} className="space"></Col>
    <Col span={22} className="content1">{t("table")}<TableView /></Col>
    <Col span={1} className="space"></Col>

    </Row>
    <PopUp trigger={buttonPopup1} setTrigger={setButtonPopup1}><br/><DemoLine /></PopUp>
    <PopUp trigger={buttonPopup2} setTrigger={setButtonPopup2}><br/><DemoColumn /></PopUp>
    </div>
    </Layout>
    
  )
}
export default App;
