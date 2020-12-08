import React from 'react'
import PropTypes from 'prop-types'

import {
    StyledWrapper,
    StyledBlock,
    StyledBottomWrap,
    StyledContent,
    StyledSlider
} from './brands-view.styled'
import BrandsPreview from '../../../../shared/brands-preview'
import BrandsContentBottom from './brands-content-bottom'
import BrandsContentMain from './brands-content-main/brands-content-main'
import ScrollSlider from '../../../../shared/scroll-slider'


const BrandsView = props => {
    return (
        <StyledWrapper>
            <StyledBlock>
                <BrandsPreview />
            </StyledBlock>
            <StyledSlider>
                <ScrollSlider title="جدیدترین های هویت" />
            </StyledSlider>
            <StyledContent>
                <BrandsContentMain />
            </StyledContent>
            <StyledBottomWrap>
                <BrandsContentBottom />
            </StyledBottomWrap>
        </StyledWrapper>
    )
}

BrandsView.propTypes = {

}

export default BrandsView
