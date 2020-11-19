import React from 'react'
import PropTypes from 'prop-types'

import { StyledWrapper } from './tabs-item.styled'

const TabsItem = ({item,index,onClick,selectedTab}) => {
    return (
        <StyledWrapper selectedTab={selectedTab} index={index} onClick={()=>onClick(index)}>
              {item}
        </StyledWrapper>
    )
}

TabsItem.propTypes = {
    item:PropTypes.string,
    index:PropTypes.number,
    onClick:PropTypes.func
}

export default TabsItem
