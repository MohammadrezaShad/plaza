import React from 'react'
import PropTypes from 'prop-types'

import {StyledButton} from './badge-button.styled.js'
import { buttonVariants } from '../../../constants/button-configs.js'

const BadgeButton = ({status='success',text,children}) => {
    return (
        <StyledButton status={status}>
            {children}
              {text}
        </StyledButton>
    )
}

BadgeButton.propTypes = {

}

export default BadgeButton
