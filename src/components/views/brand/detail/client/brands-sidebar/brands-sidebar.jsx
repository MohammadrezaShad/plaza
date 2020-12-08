import React, { Fragment } from 'react'

import { StyledBlock } from './brands-sidebar.styled'
import BrandsCategory from './brands-category'
import SwitchButton from '../../../../../shared/form/switch-button'
import { useTranslation } from 'react-i18next'
import BrandsPreview from '../../../../../shared/brands-preview'

const BrandsSidebar = () => {
    const { t } = useTranslation()
    return (
        <Fragment>
            <StyledBlock>
                <SwitchButton text={t("brandsView.showAvailableProducts")} />
            </StyledBlock>
            <StyledBlock>
                <BrandsCategory />
            </StyledBlock>
        </Fragment>
    )
}

BrandsSidebar.propTypes = {

}

export default BrandsSidebar
