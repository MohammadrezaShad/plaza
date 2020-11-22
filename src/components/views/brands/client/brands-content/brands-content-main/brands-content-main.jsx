import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import Tabs from '../../../../../shared/tabs'
import { StyledBlock, StyledFilter, StyledProducts, StyledPagination } from './brands-content-main.styled'
import BrandsContentFilters from './brands-content-filters'
import BrandsContentProducts from './brands-content-products/brands-content-products'
import Pagination from '../../../../../shared/pagination'

const BrandsContentMain = props => {
    const { t } = useTranslation()
    const [selectedTab, setselectedTab] = useState(0)
    const tabClickHandler = (tabIndex) => {
        setselectedTab(tabIndex)
    }

    const [selectedFilter, setselectedFilter] = useState(0)
    const filterClickHandler = (filterIndex) => {
        setselectedFilter(filterIndex)
    }

    return (
        <Fragment>
            <StyledBlock>
                <Tabs
                    items={[t('brandsView.allProducts'), t('brandsView.brandFeedback')]}
                    selectedTab={selectedTab}
                    onClick={tabClickHandler} />
            </StyledBlock>
            <StyledFilter>
                <BrandsContentFilters
                    selectedFilter={selectedFilter}
                    items={['جدید ترین', 'گران ترین', 'ارزان ترین', 'پرفروش ترین']}
                    onClick={filterClickHandler}
                />
            </StyledFilter>
            <StyledProducts>
                <BrandsContentProducts />
                <StyledPagination>
                    <Pagination />
                </StyledPagination>
            </StyledProducts>
        </Fragment>
    )
}

BrandsContentMain.propTypes = {

}

export default BrandsContentMain
