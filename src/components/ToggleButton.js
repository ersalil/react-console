import { Switch } from 'antd';
import React, { useState } from 'react';
import { useTranslation } from "react-i18next";

// for language support
const ToggleButton = (props) => {
    const { t } = useTranslation();
    
    const [isToggled, setIsToggled] = useState(false);
    const onToggle = () => {
        setIsToggled(!isToggled);
        props.onToggled(isToggled);
    }
    return(
    <Switch checkedChildren={t("checkin")} unCheckedChildren={t("onboard")} defaultChecked checked={isToggled} onChange={onToggle}/>
    );
};

export default ToggleButton;