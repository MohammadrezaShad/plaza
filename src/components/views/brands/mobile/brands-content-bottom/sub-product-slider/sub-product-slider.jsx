import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { useSwipeable } from "react-swipeable";

import {
    StyledWrapper,
    StyledContainer,
    StyledHead,
    StyledItem,
    StlyedText,
    StyledItemWrap,
    StyledTitle,
    StyledContent
} from './sub-product-slider.styled'

import { ReactComponent as ProductIcon } from '../../../../../../assets/res/client/prod.svg';


const SubProductSlider = ({items,title}) => {

    return (
        <StyledContainer>
            <StyledHead>
                <StyledTitle>{title}</StyledTitle>
            </StyledHead>
            <StyledContent >
                <StyledWrapper  >
                    {
                        items.map(({ title, id }) => {
                            return <StyledItemWrap key={id} >
                                <StyledItem >
                                    <ProductIcon />
                                    <StlyedText>
                                        {title}
                                    </StlyedText>
                                </StyledItem>
                            </StyledItemWrap>
                        })
                    }
                </StyledWrapper>
            </StyledContent>
        </StyledContainer>
    )
}

SubProductSlider.propTypes = {

}

export default SubProductSlider
