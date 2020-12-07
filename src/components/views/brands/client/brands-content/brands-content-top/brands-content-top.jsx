import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import {
    StyledTitle,
    StyledContent,
    StyledContainer,
    StyledLink
} from './brands-content-top.styled'
import Product from '../../../../../shared/product'
import Button from '../../../../../shared/button'
import { buttonColors, buttonVariants } from '../../../../../../constants/button-configs'
import Paths from '../../../../../../utils/paths'

const BrandsContentTop = props => {
    return (
        <Fragment>
            <StyledContainer>
                <Product title={
                    <Fragment>
                        <StyledTitle>جدیدترین های هویت</StyledTitle>
                        <StyledLink to={Paths.home.getPath()}>
                            <Button
                                text="نمایش بیشتر"
                                variant={buttonVariants.LINK}
                                color={buttonColors.SECONDARY}
                                to={Paths.home.getPath()} />
                        </StyledLink>
                    </Fragment>
                }
                    borderTitle={false}
                    marginHead={false}
                    buttonTopLeft={true}
                    alignRight={true}
                    imgWidth="64%"
                />
            </StyledContainer>
        </Fragment>
    )
}

BrandsContentTop.propTypes = {

}

export default BrandsContentTop
