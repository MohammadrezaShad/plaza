import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { StyledBlock, StyledPreview } from './brands-content.styled'
import BrandsContentTop from './brands-content-top'
import BrandsContentMain from './brands-content-main'
import BrandsContentBottom from './brands-content-bottom'
import BrandsPreview from '../../../../../shared/brands-preview'

const BrandsContent = props => {
    return (
        <Fragment>

            <StyledBlock>
                <BrandsContentMain />
            </StyledBlock>
            <StyledBlock>
                <BrandsContentBottom />
            </StyledBlock>
        </Fragment>
    )
}

BrandsContent.propTypes = {

}

export default BrandsContent
