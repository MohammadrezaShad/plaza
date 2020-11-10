import React from 'react'
import PropTypes from 'prop-types'

import {StyledWrapper} from './panel.styled'

const Panel = ({children}) => {
    return (
        <StyledWrapper>
            {children}
        </StyledWrapper>
    )
}

Panel.propTypes = {
    children:PropTypes.node
}

export default Panel
