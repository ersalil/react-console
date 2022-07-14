import { Switch } from 'antd';
import React, { useState } from 'react';


const ToggleButton = (props) => {
    const [isToggled, setIsToggled] = useState(false);
    const onToggle = () => {
        setIsToggled(!isToggled);
        props.onToggled(isToggled);
    }
    return(
    <Switch checkedChildren="Check In" unCheckedChildren="On Board" defaultChecked checked={isToggled} onChange={onToggle}/>
    );
};

export default ToggleButton;