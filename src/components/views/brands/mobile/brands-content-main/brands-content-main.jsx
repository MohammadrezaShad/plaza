import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import { StyledBlock, StyledTabWrap, StyledFeedWrap } from './brands-content-main.styled'
import Tabs from '../../../../shared/tabs'
import BrandsProducts from './brands-products'
import BrandsFeedback from './brands-feedback'
import BrandsFilters from './brands-filters'

const BrandsContentMain = props => {
    const { t } = useTranslation()
    const [selectedTab, setselectedTab] = useState(0)
    const tabClickHandler = (tabIndex) => {
        setselectedTab(tabIndex)
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
                    <StyledTabWrap>
                        <BrandsFilters />
                        <BrandsProducts />
                    </StyledTabWrap> :
                    <StyledFeedWrap>
                        <BrandsFeedback />
                    </StyledFeedWrap>
            }
        </Fragment>
    )
}

BrandsContentMain.propTypes = {

}

export default BrandsContentMain
