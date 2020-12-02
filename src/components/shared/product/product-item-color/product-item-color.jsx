import React from 'react'
import PropTypes from 'prop-types'

import { StyledWrapper } from './product-item-color.styled'

const ProductItemColor = ({ type }) => {
    return <StyledWrapper type={type}></StyledWrapper>
}

ProductItemColor.propTypes = {
    type:PropTypes.number
}

export default ProductItemColor
