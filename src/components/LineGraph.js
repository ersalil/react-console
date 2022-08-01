import React, { useState, useEffect } from "react";
import { Line } from "@ant-design/plots";
import ToggleButton from "./ToggleButton";
import "../style/LineGraph.css";
import "../style/loader.css";
import { UseApiLine } from "../hooks/api";
import { useTranslation } from "react-i18next";
import SelectShip from "./SelectShip";
import { Modal } from "antd";
import { FullscreenOutlined, PropertySafetyFilled } from "@ant-design/icons";

const DemoLine = (props) => {
  const [itemData, setItemData] = useState({});
  
  // for togging between on board and check in data
  const [isToggled, setIsToggled] = useState(true);
  
  // for translating the text
  const { t } = useTranslation();
  
  //default value of the select ship
	const [shipName, setLineData] = useState("DM");

	//popup modal
	const [isModalVisible, setIsModalVisible] = useState(false);

	// Data fetched for Table from Api.js
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		if (isToggled) {
			console.log("On Board Data");
		} else console.log("Check In Data");
		setIsLoading(true);
		UseApiLine(setData, setIsLoading, shipName);
        props.onChange(shipName)
	}, [shipName, isToggled]);

	//modal functions
	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

  // if toggled, show on board data, else show check in data
	var yaxis = "checkedin_couch";
	var xaxis = "checkedin_time";
	if (isToggled) {
		xaxis = "onboard_time";
		yaxis = "onboard_couch";
	}
	const config = {
		data,

		xField: xaxis,
		yField: yaxis,

		xAxis: [{
			title: t("Time"),
			type: "time",
			ticks: {

				min: "00:00",
				max: "23:00",
				interval: "1h"
			}
		}],

		yAxis: [{
			ticks: {
				min: 0,
				max: 100,
				stepSize: 20
			}
		}],

		seriesField: "voyage_id",


		legend: {
			position: "top",
		},
		smooth: true,

		animation: {
			appear: {
				animation: "path-in",
				duration: 2000,
			},
		},

		defaultColor: "white",
  };
  
  // if data is empty, show a loading screen
	// if (isLoading) {
	// 	return <div className="loader"> Loading... </div>;
	// }
	return (
		<div>
			<div
				className="flex-row"
				style={{ alignItems: "start", marginBottom: "10px" }}
			>
				{t("line")}
				<div className="flex-row" style={{ gap: "10px" }}>
					<Modal
						title="Last 10 Embarkation Analysis"
						visible={isModalVisible}
						onCancel={handleCancel}
						width={1200}
						footer={null}
						centered
					>
						<div
							className="flex-row"
							style={{
								justifyContent: "flex-end",
								marginBottom: "10px",
							}}
						>
							<p>
								<ToggleButton onToggled={setIsToggled} />
								&nbsp;
								<SelectShip
									onChange={setLineData}
									itemData={itemData}
								/>
							</p>
						</div>
						<Line className="lineGraph" {...config} />
					</Modal>
					<ToggleButton onToggled={setIsToggled} />
					<SelectShip onChange={setLineData} itemData={itemData} />
					&nbsp;
					<FullscreenOutlined onClick={showModal} />
				</div>
			</div>
			<Line loading={isLoading} className="lineGraph" data={{labels: ["00:00","06.00","12:00","18:00"]}} {...config} />
		</div>
	);
};
export default DemoLine;
