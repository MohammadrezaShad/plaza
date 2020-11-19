import React from 'react'
import PropTypes from 'prop-types'

import { StyledWrapper } from './order-progress.styled'
import OrderProgressItem from './order-progress-item'

const OrderProgress = props => {
    return (
        <StyledWrapper>
             <OrderProgressItem />
        </StyledWrapper>
    )
}

OrderProgress.propTypes = {

}

export default OrderProgress
