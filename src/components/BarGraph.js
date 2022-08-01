import React, { useState, useEffect } from "react";
import { Column } from "@ant-design/plots";
import "../style/BarGraph.css";
import ToggleButton from "./ToggleButton";
import { UseApiBar } from "../hooks/api";
import { useTranslation } from "react-i18next";
import { Modal } from "antd";
import { FullscreenOutlined } from "@ant-design/icons";

// making a bar graph to show the data of last 5 embarkation of all ships
const DemoColumn = () => {
    const [isToggled, setIsToggled] = useState(true);

    // for translating the text
    const { t } = useTranslation();

    //popup modal
    const [isModalVisible, setIsModalVisible] = useState(false);

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if (isToggled) {
            console.log("On Board Data");
        } else console.log("Check In Data");
        UseApiBar(setData, setIsLoading);
        console.log(data);
    }, [isToggled]);

    //modal functions
    // open modal
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    // if toggled, show on board data, else show check in data
    var yaxis = "avg_checkedin_couch";
    var xaxis = "checkedin_time";
    if (isToggled) {
        yaxis = "avg_onboard_couch";
        xaxis = "onboard_time";
    }

    // if data is empty, show a loading screen
    const config = {
        data,
        xField: xaxis,
        yField: yaxis,
        seriesField: "ship",
        isGroup: true,
        columnStyle: {
            radius: [20, 20, 0, 0],
        },
    };

	// if (isLoading) {
	// 	return <section>Loading...</section>;
	// }

	// if data is not empty, show the bar graph
	return (
		<div>
			<div
				className="flex-row"
				style={{ alignItems: "start", marginBottom: "10px" }}
			>
				{/* heading of the graph */}
				{t("bar")}
				<div
					className="flex-row"
					style={{ justifyContent: "flex-end" }}
				>
					{/* modal button */}
					<Modal
						title="Busiest Hour of Embarkation"
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
							</p>
						</div>
						<Column className="barGraph" {...config} />
					</Modal>
					&nbsp;
					{/* toggle button */}
					<ToggleButton onToggled={setIsToggled} />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<FullscreenOutlined onClick={showModal} />
				</div>
			</div>
			<Column loading={isLoading} className="barGraph" {...config} />
		</div>
	);
};

export default DemoColumn;
