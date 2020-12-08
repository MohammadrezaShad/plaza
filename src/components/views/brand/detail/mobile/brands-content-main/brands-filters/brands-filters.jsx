import React, { Fragment, useState } from 'react'

import { StyledBlock, StyledFilterBadge } from './brands-filters.styled'
import BrandsFiltersTop from './brands-filters-top'
import BrandsFiltersBadge from './brands-filters-badge'

const BrandsFilters = () => {
    const [activeFilters, setActiveFilters] = useState([])
    const [activeFiltersMain, setactiveFiltersMain] = useState([])

    const onChange = (id, text) => {
        let newActiveFilters = [...activeFilters, { text, id }]
        if (activeFilters.find((activeFilter) => activeFilter.id === id)) {
            newActiveFilters = newActiveFilters.filter((newActiveFilter) => newActiveFilter.id !== id)
        }
        setActiveFilters([...newActiveFilters])
    }

    const onClick = () => {
        setactiveFiltersMain([...activeFilters])
    }

    const onChangeLive = (id, text) => {
        let newActiveFilters = [...activeFilters, { text, id }]
        if (activeFilters.find((activeFilter) => activeFilter.id === id)) {
            newActiveFilters = newActiveFilters.filter((newActiveFilter) => newActiveFilter.id !== id)
        }
        setActiveFilters([...newActiveFilters])
        setactiveFiltersMain([...newActiveFilters])
    }

    return (
        <Fragment>
            <StyledBlock acactiveFiltersMain={activeFiltersMain.length}>
                <BrandsFiltersTop
                    activeFiltersMain={activeFiltersMain}
                    onChange={onChange}
                    onClick={onClick}
                />
            </StyledBlock>
            <StyledBlock>
                {
                    activeFiltersMain.map(({ id, text }) => {
                        return <StyledFilterBadge key={id}>
                            <BrandsFiltersBadge onClick={onChangeLive} text={text} id={id} />
                        </StyledFilterBadge>
                    })
                }
            </StyledBlock>
        </Fragment>
    )
}

BrandsFilters.propTypes = {

}

export default BrandsFilters
