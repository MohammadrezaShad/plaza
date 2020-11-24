import React from 'react'
import PropTypes from 'prop-types'

import { StyledWrapper } from './order-progress.styled'
import OrderProgressItem from './order-progress-item'

const OrderProgress = ({level=0}) => {
    return (
        <StyledWrapper level={level}>
             <OrderProgressItem 
             level={level} index={1} 
             icons="shopping-cart" 
             textOne="سبد" 
             textTwo="خرید" />

             <OrderProgressItem 
             level={level} 
             index={2} 
             icons="home-o" 
             textOne="اطلاعات" 
             textTwo="ارسال" />

             <OrderProgressItem 
             level={level} 
             index={3} 
             icons="wallet-o" 
             textOne="اطلاعات" 
             textTwo="پرداخت" />
        </StyledWrapper>
    )
}

OrderProgress.propTypes = {

}

export default OrderProgress
