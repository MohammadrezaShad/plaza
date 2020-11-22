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
            <StyledContent>
                <StyledTitle>جدیدترین های هویت</StyledTitle>
                <StyledLink to={Paths.home.getPath()}>
                <Button 
                text="نمایش بیشتر" 
                variant={buttonVariants.LINK} 
                color={buttonColors.SECONDARY} 
                to={Paths.home.getPath()} />
                </StyledLink>
            </StyledContent>
            <StyledContainer>
                <Product buttonTopLeft={true} alignRight={true} paddingUnit={2}/>
            </StyledContainer>
        </Fragment>
    )
}

BrandsContentTop.propTypes = {

}

export default BrandsContentTop
