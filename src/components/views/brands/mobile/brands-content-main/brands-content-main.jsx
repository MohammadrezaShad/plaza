import React, { Fragment, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { StyledBlock, StyledTabWrap, StyledFeedWrap, StyledLoadingIcon, StyledExpandButton } from './brands-content-main.styled'
import Tabs from '../../../../shared/tabs'
import BrandsProducts from './brands-products'
import BrandsFeedback from './brands-feedback'
import BrandsFilters from './brands-filters'
import { ReactComponent as Loading } from '../../../../../assets/images/loading.svg';
import Button from '../../../../shared/button'
import { buttonVariants } from '../../../../../constants/button-configs'
import useScrollRequest from '../../../../../helpers/use-scroll-request'

const BrandsContentMain = () => {
    const { t } = useTranslation()
    const node = useRef(null)
    const feedNode = useRef(null)

    const [selectedTab, setselectedTab] = useState(0)
    const [loadingCount, setLoadingCount] = useState(0)
    const [feedbackLoadingCount, setFeedbackLoadingCount] = useState(0)
    const loadData = () => {
        console.log('LoadData')
        setLoadingCount(loadingCount + 1)
    }
    const loadFeed = () => {
        console.log('LoadFeed')
        setFeedbackLoadingCount(feedbackLoadingCount + 1)
    }

    const [elementInView, elementGrabber] = useScrollRequest(2000, loadingCount !== 0 && loadingCount % 2 == 0, loadData)
    const [feedElementInView, feedElementGrabber] = useScrollRequest(2000, feedbackLoadingCount !== 0 && feedbackLoadingCount % 2 == 0, loadFeed)

    const tabClickHandler = (tabIndex) => {
        setselectedTab(tabIndex)
    }
    console.log(loadingCount)
    useEffect(() => {
        elementGrabber(node.current)
        feedElementGrabber(feedNode.current)
    }, [selectedTab])
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
                        <StyledLoadingIcon ref={node}>
                            {
                                loadingCount !== 0 && loadingCount % 2 == 0 ?
                                    <Button variant={buttonVariants.OUTLINE}
                                        text={t("brandsView.showMoreProduct")}
                                        onClick={loadData} /> :
                                    <Loading />
                            }
                        </StyledLoadingIcon>
                    </StyledTabWrap> :
                    <StyledFeedWrap>
                        <BrandsFeedback />
                        <StyledLoadingIcon ref={feedNode}>
                            {
                                feedbackLoadingCount !== 0 && feedbackLoadingCount % 2 == 0 ?
                                    <Button variant={buttonVariants.OUTLINE}
                                        text="نمایش نظرات بیشتر"
                                        onClick={loadFeed} /> :
                                    <Loading />
                            }
                        </StyledLoadingIcon>
                    </StyledFeedWrap>
            }
        </Fragment>
    )
}

BrandsContentMain.propTypes = {

}

export default BrandsContentMain
