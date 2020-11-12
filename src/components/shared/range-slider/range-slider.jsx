import React from 'react'
import PropTypes from 'prop-types'

import {
    StyledWrapper,
    StyledProgress
} from './range-slider.styled'
import { rangeSliderStyles, rangeSliderTypes } from '../../../constants/range-slider-configs'

const RangeSlider = ({
    style = rangeSliderStyles.CIRCLE,
    type = rangeSliderTypes.DOUBLE,
    onChange
}) => {
    return (
        <StyledWrapper $style={style}>
            <StyledProgress/>
        </StyledWrapper>
    )
}

RangeSlider.propTypes = {
    style: PropTypes.number,
    type: PropTypes.number,
    onChange: PropTypes.func
}

export default RangeSlider
