/* eslint-disable require-jsdoc */
import DemoColumn from './components/BarGraph';
import DemoLine from './components/LineGraph';
import TableView from './components/TableView';
import React, {useState} from 'react';
import {Layout, Col, Row} from 'antd';
import './App.css';
import './style/Common.css';
// import LanguageButton from './components/LanguageButton';
// import i18n from '../src/translations/i18n';
// import { useState } from 'react';
import {useTranslation} from 'react-i18next';

document.body.style.backgroundColor = '#f3f3f3';
function App() {
  const {t} = useTranslation();
  // const [language, setLanguage] = useState(i18n.language);
  const [ship, setShipName] = useState('DM');
  // function handleOnclick(e) {
  //   e.preventDefault();
  //   setLanguage(e.target.value);
  //   i18n.changeLanguage(e.target.value);
  // }

  document.body.style.backgroundColor = '#f3f3f3';

  return (
    <Layout>
      <div className='background'>
        <div className='header'>
          <h1 className='head'>{t('title')}</h1>
        </div>
        <Row className='graph'>
          <Col className='space'></Col>
          <Col className='content'>
            <DemoLine onChange={setShipName} />
          </Col>
          <Col className='space'></Col>
          <Col className='content'>
            <DemoColumn />
          </Col>
          <Col className='space'></Col>
        </Row>
        <Row>
          <Col className='space'></Col>
          <Col className='content1'>
            {t('table')}
            <TableView shipName={ship} />
          </Col>
          <Col className='space'></Col>
        </Row>
        <Row>
          <footer className='footer'>
            Copyright © 2022 DeCurtis Corporation
          </footer>
        </Row>
      </div>
    </Layout>
  );
}

export default App;
