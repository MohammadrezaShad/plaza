import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import {
    StyledContainer,
    StyledImgWrap,
    StyledImgContainer,
    StyledImg,
    StyledContent,
    StyledItemDetail,
    StyledTitle,
    StyledColors
} from './mobile-product-item.styled'
import ProductItemColor from '../product-item-color'
import ProductItemDetail from '../product-item-detail'

const MobileProductItem = ({
    id,
    href,
    imgSrc,
    title,
    price,
    offPrice,
    point,
    colors = true,
    alignRight = true }) => {
    return (
        <Fragment>
            <StyledContainer>
                <StyledImgWrap to={href}>
                    <StyledImgContainer>
                        <StyledImg src={imgSrc} />
                    </StyledImgContainer>
                </StyledImgWrap>
                <StyledContent>
                    <StyledTitle to={href} $alignRight={alignRight}>{title}</StyledTitle>
                    <StyledItemDetail $alignRight={alignRight}>
                        <ProductItemDetail
                            price={price}
                            offPrice={offPrice}
                            href={href}
                            point={point}
                            $alignRight={alignRight}
                        />
                    </StyledItemDetail>
                    {
                        colors ?
                            <StyledColors $alignRight={alignRight}>
                                <ProductItemColor type={1} />
                                <ProductItemColor type={2} />
                                <ProductItemColor type={3} />
                                <ProductItemColor type={4} />
                            </StyledColors> : null
                    }
                </StyledContent>
            </StyledContainer>
        </Fragment>
    )
}

MobileProductItem.propTypes = {

}

export default MobileProductItem
