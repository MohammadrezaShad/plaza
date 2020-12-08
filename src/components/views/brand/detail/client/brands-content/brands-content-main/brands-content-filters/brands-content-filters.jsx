import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'

import { StyledFilterItem } from './brands-content-filters.styled'

const BrandsContentFilters = ({ items,onClick,selectedFilter}) => {

    return (
        <Fragment>
            {
                items.map((item, index) => {
                    
                    return <StyledFilterItem
                        onClick={()=>onClick(index)}
                        selectedFilter={selectedFilter}
                        key={index}
                        index={index}>
                        {item}
                        </StyledFilterItem>
                })
            }
        </Fragment>
    )
}

BrandsContentFilters.propTypes = {
    items: PropTypes.array
}

export default BrandsContentFilters
