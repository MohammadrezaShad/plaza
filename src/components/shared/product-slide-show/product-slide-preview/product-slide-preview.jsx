import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { 
    StyledWrapper, 
    StyledImgWrapper, 
    StyledImgContainer, 
    StyledImg 
} from './product-slide-preview.styled'

const ProductSlidePreview = ({ onClick, selectedItem, prevImg, index }) => {
    console.log(index,selectedItem)
    return (
        <StyledWrapper onClick={() => onClick(index)}>
            <StyledImgWrapper selectedItem={selectedItem} index={index}>
                <StyledImgContainer >
                    <StyledImg src={prevImg} />
                </StyledImgContainer>
            </StyledImgWrapper>
        </StyledWrapper>
    )
}

ProductSlidePreview.propTypes = {

}

export default ProductSlidePreview
