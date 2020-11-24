import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import Tabs from '../../../../../shared/tabs'
import {
    StyledContainer,
    StyledSlider,
    StyledWrapper,
    StyledBlock,
    StyledFilter,
    StyledProducts,
    StyledPagination,
    StyledFeedbackPagination,
    StyledFeedbackBlock
} from './brands-content-main.styled'
import BrandsContentFilters from './brands-content-filters'
import BrandsContentProducts from './brands-content-products/brands-content-products'
import Pagination from '../../../../../shared/pagination'
import BrandsFeedback from './brands-feedback'
import ProductSlideShow from '../../../../../shared/product-slide-show'

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
            {
                selectedTab === 0 ?
                    <Fragment>
                        <StyledFilter>
                            <BrandsContentFilters
                                selectedFilter={selectedFilter}
                                items={['جدید ترین', 'گران ترین', 'ارزان ترین', 'پرفروش ترین']}
                                onClick={filterClickHandler}
                            />
                        </StyledFilter>
                        <StyledProducts>
                            <BrandsContentProducts />
                        </StyledProducts>
                        <StyledPagination >
                            <Pagination />
                        </StyledPagination>
                    </Fragment> :
                    <StyledContainer>
                        <StyledFeedbackBlock>
                            <StyledWrapper>
                                <BrandsFeedback />
                            </StyledWrapper>
                            <StyledFeedbackPagination >
                                <Pagination />
                            </StyledFeedbackPagination>
                        </StyledFeedbackBlock>

                        <StyledSlider>
                            <ProductSlideShow title={t("plazaSpecialOffer")} />
                        </StyledSlider>
                    </StyledContainer>
            }

        </Fragment>
    )
}

BrandsContentMain.propTypes = {

}

export default BrandsContentMain
