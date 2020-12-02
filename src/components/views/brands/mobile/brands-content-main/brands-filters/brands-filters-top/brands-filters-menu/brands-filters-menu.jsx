import React from 'react'
import PropTypes from 'prop-types'

import { 
    StyledWrapper, 
    StyledLayout, 
    StyledHead, 
    StyledHeadText, 
    StyledIcon, 
    StlyedContent 
} from './brands-filters-menu.styled'
import IconProvider from '../../../../../../../../providers/icon/icon-provider'

const BrandsFiltersMenu = ({showFilters,toggleFilters}) => {
    return (
        <StyledWrapper showFilters={showFilters}>
            <StyledLayout showFilters={showFilters}>
                <StyledHead>
                    <StyledHeadText>
                        فیلتر محصولات
              </StyledHeadText>
                    <StyledIcon 
                    onClick={toggleFilters} 
                    as={IconProvider} 
                    icon="close" 
                    size="16px" />
                </StyledHead>
                <StlyedContent>
                  Filters;
                </StlyedContent>
            </StyledLayout>
        </StyledWrapper>
    )
}

BrandsFiltersMenu.propTypes = {

}

export default BrandsFiltersMenu
