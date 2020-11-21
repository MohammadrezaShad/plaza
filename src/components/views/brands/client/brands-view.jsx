import React from 'react'
import PropTypes from 'prop-types'

import { 
    StyledWrapper, 
    StyledLayout, 
    StyleContentdBlock, 
    StyledSidebarBlock, 
    StyledContainer 
} from './brands-view.styled'
import BrandsSidebar from './brands-sidebar'
import BrandsContent from './brands-content'

const BrandsView = props => {
    return (
        <StyledWrapper>
            <StyledLayout>
                <StyledContainer>
                    <StyledSidebarBlock>
                        <BrandsSidebar />
                    </StyledSidebarBlock>
                    <StyleContentdBlock>
                        <BrandsContent />
                    </StyleContentdBlock>
                </StyledContainer>
            </StyledLayout>
        </StyledWrapper>
    )
}

BrandsView.propTypes = {

}

export default BrandsView
