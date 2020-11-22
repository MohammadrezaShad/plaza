import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { StyledWrapper } from './tabs.styled'
import TabsItem from './tabs-item'

const Tabs = ({ 
    items = ['نقد و بررسی', 'مشخصات فنی', 'دیدگاه های کاربران', 'پرسش و پاسخ'], 
    onClick, 
    selectedTab 
}) => {

    const renderTabs = () => {
        return items.map((item, index) => {
            return (
                <TabsItem selectedTab={selectedTab} key={index} index={index} item={item} onClick={onClick} />
            )
        })
    }
    return (
        <StyledWrapper>
            {renderTabs()}
        </StyledWrapper>
    )
}

Tabs.propTypes = {
    onClick:PropTypes.func,
    selectedTab:PropTypes.number,
    items:PropTypes.array
}

export default Tabs
