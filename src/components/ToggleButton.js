import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Switch } from 'antd';
import React from 'react';

const ToggleButton = () => (
  <>
    <Switch checkedChildren="Check In" unCheckedChildren="On Board" defaultChecked />
  </>
);

export default ToggleButton;