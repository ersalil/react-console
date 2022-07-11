import { CaretRightFilled } from '@ant-design/icons';
import { Dropdown, Menu, message, Space } from 'antd';
import React from 'react';

const handleButtonClick = (e) => {
  message.info('Click on left button.');
  console.log('click left button', e);
};

const handleMenuClick = (e) => {
  message.info('Click on menu item.');
  console.log('click', e);
};

const menu = (
  <Menu
    onClick={handleMenuClick}
    items={[
      {
        label: 'Disney Wish',
        key: '1',
        icon: <CaretRightFilled />,
      },
      {
        label: 'Disney Wonder',
        key: '2',
        icon: <CaretRightFilled />,
      },
      {
        label: 'Disney Magic',
        key: '3',
        icon: <CaretRightFilled />,
      },
    ]}
  />
);

const DropDown = () => (
  <Space wrap>
    <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
      Select Ship
    </Dropdown.Button>
  </Space>
);

export default DropDown;