/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable no-tabs */
/* eslint-disable quotes */
/* eslint-disable require-jsdoc */
import BarGraph from "./components/BarGraph";
import LineGraph from "./components/LineGraph";
import TableView from "./components/TableView";
import React, {useState} from "react";
import {Layout, Col, Row} from "antd";
import "./App.css";
import "./style/Common.css";
// import "./../"
// import LanguageButton from './components/LanguageButton';
// import i18n from '../src/translations/i18n';
// import { useState } from 'react';
import {useTranslation} from "react-i18next";

// document.body.style.backgroundColor = "#f3f3f3";
function App() {
	const {t} = useTranslation();
	// const [language, setLanguage] = useState(i18n.language);
	const [ship, setShipName] = useState("DM");
	// function handleOnclick(e) {
	//   e.preventDefault();
	//   setLanguage(e.target.value);
	//   i18n.changeLanguage(e.target.value);
	// }

	// document.body.style.backgroundColor = "#f3f3f3";

	return (
		<Layout>
			<div>
				<div className="header">
					{/* <img src="src/asset/logo.png" alt="Italian Trulli" /> */}
					<h1 className="head">{t("title")}</h1>
				</div>
				<Row className="graph">
					<Col className="content">
						<LineGraph onChange={setShipName} />
					</Col>
					<Col className="content">
						<BarGraph />
					</Col>
					<Col className="space"></Col>
				</Row>
				<Row>
					<Col className="space"></Col>
					<Col className="content1">
						{t("table")}
						<TableView shipName={ship} />
					</Col>
					<Col className="space"></Col>
				</Row>
			</div>
			<footer className="footer">
						<span id = "left-foot" style={{"float": "left"}}>{process.env.REACT_APP_VERSION} </span>
						<span id = "right-foot" style={{"float": "right"}}>Copyright © 2022 DeCurtis Corporation</span>
			</footer>
		</Layout>
	);
}

export default App;

