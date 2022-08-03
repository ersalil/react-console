/* eslint-disable react/prop-types */
import {Select} from 'antd';
import React from 'react';

const {Option, OptGroup} = Select;
const itemData = {
  'Disney': ['DM', 'DF', 'DW', 'DD', 'WW'],
};
const children = [];

// dividing sections of different ships
for (const [key, value] of Object.entries(itemData)) {
  const data = value.map((ship) => {
    return <Option key={Option} value={ship}>{ship}</Option>;
  });
  children.push(<OptGroup label={key}>{data}</OptGroup>);
  console.log(key, value);
}

const SelectShip = (props) => {
  const handleChange = (value) => {
    props.onChange(value);
  };
  return (
    <Select
      defaultValue={itemData[Object.keys(itemData)[0]][0]}
      style={{
        width: 150,
      }}
      size='small'
      onChange={handleChange}
    >
      {children}
    </Select>
  );
};

export default SelectShip;
