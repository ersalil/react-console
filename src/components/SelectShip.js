import { Select } from "antd";
import React from "react";
const { Option, OptGroup } = Select;

const itemData = {
  Disney: ["DREAM", "MAGIC", "SCARLET", "VALIANT"],
  "Virgin Voyages": ["VV1", "VV2"],
};
const children = [];
for (const [key, value] of Object.entries(itemData)) {
  const data = value.map((ship) => {
    return <Option value={ship}>{ship}</Option>;
  });
  children.push(<OptGroup label={key}>{data}</OptGroup>);
  console.log(key, value);
}

const SelectShip = (props) => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
    props.onChange(value);
  };
  return (
    <Select
      defaultValue={itemData[Object.keys(itemData)[0]][0]}
      style={{
        width: 150,
      }}
      size="small"
      onChange={handleChange}
    >
      {children}
    </Select>
  );
};

export default SelectShip;
