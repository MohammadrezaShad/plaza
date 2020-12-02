import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { StyledBlock, StyledFilterBadge } from './brands-filters.styled'
import BrandsFiltersTop from './brands-filters-top'
import BrandsFiltersBadge from './brands-filters-badge'

const BrandsFilters = props => {
    return (
        <Fragment>
            <StyledBlock>
                <BrandsFiltersTop />
            </StyledBlock>
            <StyledBlock>
                <StyledFilterBadge>
                    <BrandsFiltersBadge text="دسته بازی" />
                </StyledFilterBadge>
                <StyledFilterBadge>
                    <BrandsFiltersBadge text="دسته بازی" />
                </StyledFilterBadge>
                <StyledFilterBadge>
                    <BrandsFiltersBadge text="دسته بازی" />
                </StyledFilterBadge>
            </StyledBlock>
        </Fragment>
    )
}

BrandsFilters.propTypes = {

}

export default BrandsFilters
