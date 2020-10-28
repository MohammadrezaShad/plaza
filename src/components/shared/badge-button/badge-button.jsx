import React from 'react'
import PropTypes from 'prop-types'

import {StyledButton} from './badge-button.styled.js'
import { buttonVariants } from '../../../constants/button-configs.js'
import { badgeButtonVariants } from '../../../constants/badge-button-config.js'

const BadgeButton = ({status=badgeButtonVariants.SUCCESS,text,children}) => {
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
