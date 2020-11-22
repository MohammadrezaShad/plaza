import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { StyledBlock } from './brands-content.styled'
import BrandsContentTop from './brands-content-top'
import BrandsContentMain from './brands-content-main'
import BrandsContentBottom from './brands-content-bottom'

const BrandsContent = props => {
    return (
        <Fragment>
            <StyledBlock>
                <BrandsContentTop />
            </StyledBlock>
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
