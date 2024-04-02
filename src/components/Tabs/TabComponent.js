import React, { useState } from 'react'

import Tabs from './Tabs'
import "./Tabs.css";
import {tabLabels} from './Const'

const TabComponent = () => {
    const [activeTab, setActiveTab] = useState(tabLabels.WATCH_ANYWHERE);
    
    const onClickTab = (tag) => {
        setActiveTab(tag);
    };

  return (
    <div>
        <Tabs activeTabName={activeTab} onClickTab={onClickTab}/>
    </div>
  )
}
export default TabComponent

