import React from 'react'
import PropTypes from 'prop-types'

import {
    StyledWrapper,
    StyledLayout,
    StyleContentdBlock,
    StyledSidebarBlock,
    StyledContainer,
    StyledPreview,
    StyledContent,
    StyledBlock,
    StyledPreviewWrap,
    StyledTopWrap,
    StyledTop
} from './brands-view.styled'
import BrandsSidebar from './brands-sidebar'
import BrandsContent from './brands-content'
import BrandsContentTop from './brands-content/brands-content-top'
import BrandsPreview from '../../../../shared/brands-preview'

const BrandsView = props => {
    return (
        <StyledWrapper>
            <StyledLayout>
                <StyledContainer>
                    <StyledBlock>
                        <StyledPreviewWrap>
                            <StyledPreview>
                                <BrandsPreview />
                            </StyledPreview>
                        </StyledPreviewWrap>
                        <StyledTopWrap>
                            <StyledTop>
                                <BrandsContentTop />
                            </StyledTop>
                        </StyledTopWrap>
                    </StyledBlock>
                    <StyleContentdBlock>
                        <StyledSidebarBlock>
                            <BrandsSidebar />
                        </StyledSidebarBlock>
                        <StyledContent>
                            <BrandsContent />
                        </StyledContent>
                    </StyleContentdBlock>
                </StyledContainer>
            </StyledLayout>
        </StyledWrapper>
    )
}

BrandsView.propTypes = {

}

export default BrandsView
