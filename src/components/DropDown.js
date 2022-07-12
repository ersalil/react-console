import { CaretRightFilled } from '@ant-design/icons';
import { Dropdown, Menu, message, Space } from 'antd';
import React from 'react';

const handleButtonClick = (e) => {
  message.info('Click on left button.');
  console.log('click left button', e);
};


const DropDown = (props) => {
    const handleMenuClick = (e) => {
        message.info('Click on menu item.');
        console.log('click', e.key);
        props.onChange(itemData[e.key-1]);
        // const itemData = props.itemData;
      };
      var key =0
    const itemData = ["China","Japan"];
    const finalItemData = itemData.map((item)=>{
        key +=1
         return{"label": item, "key":key,"icon":<CaretRightFilled />}})
    
    const menu = (
        
        <Menu
          onClick={handleMenuClick}
          items={finalItemData}
        />
      );
      

    return (
    <Space wrap>
        <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
        Select Ship
        </Dropdown.Button>
    </Space>
    );
    };

export default DropDown;