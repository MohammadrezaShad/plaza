import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { StyledItem } from './brands-products.styled'
import MobileProductItem from '../../../../../../shared/product/mobile-product-item'
import Paths from '../../../../../../../utils/paths'
import ProdOne from "../../../../../../../assets/images/club/prod1test.png";
import ProdTwo from "../../../../../../../assets/images/club/prod2test.png";
import ProdThree from "../../../../../../../assets/images/club/prod3test.png";
import ProdFour from "../../../../../../../assets/images/club/prod4test.png";
const itemsTest = [
    {
        id: 1,
        href: Paths.home.getPath(),
        imgSrc: ProdOne,
        title: "اسپیکر بلوتوث مشکی رنگ کیفیت عالی دارای امکانات خیلی زیاد",
        price: 3000000,
        offPrice: 2550000,
        point: 102
    },
    {
        id: 1111,
        href: Paths.home.getPath(),
        imgSrc: ProdOne,
        title: "اسپیکر بلوتوث مشکی رنگ کیفیت عالی دارای امکانات خیلی زیاد",
        price: 3000000,
        offPrice: 2550000,
        point: 102
    },
    {
        id: 2222,
        href: Paths.home.getPath(),
        imgSrc: ProdOne,
        title: "اسپیکر بلوتوث مشکی رنگ کیفیت عالی دارای امکانات خیلی زیاد",
        price: 3000000,
        offPrice: 2550000,
        point: 102
    },
    {
        id: 2,
        href: Paths.home.getPath(),
        imgSrc: ProdTwo,
        title: "اسپیکر بلوتوث مشکی رنگ کیفیت عالی دارای امکانات خیلی زیاد",
        price: 3000000,
        offPrice: 2550000,
        point: 102
    },
    {
        id: 3,
        href: Paths.home.getPath(),
        imgSrc: ProdThree,
        title: "اسپیکر بلوتوث مشکی رنگ کیفیت عالی دارای امکانات خیلی زیاد",
        price: 3000000,
        offPrice: 2550000,
        point: 102
    },
    {
        id: 4,
        href: Paths.home.getPath(),
        imgSrc: ProdFour,
        title: "اسپیکر بلوتوث مشکی رنگ کیفیت عالی دارای امکانات خیلی زیاد",
        price: 3000000,
        offPrice: 2550000,
        point: 102
    },
    {
        id: 5,
        href: Paths.home.getPath(),
        imgSrc: ProdTwo,
        title: "اسپیکر بلوتوث مشکی رنگ کیفیت عالی دارای امکانات خیلی زیاد",
        price: 3000000,
        offPrice: 2550000,
        point: 102
    }
]

const BrandsProducts = ({ items = itemsTest }) => {
    return (
        <Fragment>
            {
                items.map(({
                    id,
                    href,
                    imgSrc,
                    title,
                    price,
                    offPrice,
                    point }) => {
                    return (
                        <StyledItem key={id}>
                            <MobileProductItem
                                id={id}
                                href={href}
                                imgSrc={imgSrc}
                                title={title}
                                price={price}
                                offPrice={offPrice}
                                point={point}
                            />
                        </StyledItem>
                    )
                })
            }
        </Fragment>
    )
}

BrandsProducts.propTypes = {
    items: PropTypes.array
}

export default BrandsProducts
