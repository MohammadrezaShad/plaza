import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { StyledWrapper, StyledItem } from './brands-content-products.styled'
import ProdOne from "../../../../../../../../assets/images/club/prod1test.png"
import ProdTwo from "../../../../../../../../assets/images/club/prod2test.png"
import ProdThree from "../../../../../../../../assets/images/club/prod3test.png"
import ProdFour from "../../../../../../../../assets/images/club/prod4test.png"
import Paths from '../../../../../../../../utils/paths'
import ProductItem from '../../../../../../../shared/product/product-item'

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
const BrandsContentProducts = ({ items = itemsTest }) => {
    const [hoverItem, sethoverItem] = useState(null)
    return (
        <StyledWrapper>
            {
                items.map(({ id, href, title, price, offPrice, point }) => {
                    return (
                        <StyledItem
                            key={id}
                            onMouseEnter={() => sethoverItem(id)}
                            onMouseLeave={() => sethoverItem(null)}
                        >
                            <ProductItem
                                href={href}
                                compare={true}
                                imgSrc={ProdOne}
                                title={title}
                                price={price}
                                offPrice={offPrice}
                                point={point}
                                hoverable={true}
                                $alignRight={true}
                                gilMark={true}
                                brand={true}
                                specialOffer={true}
                                hover={hoverItem === id}
                                imgWidth="73%"
                            />
                        </StyledItem>
                    )
                })
            }
        </StyledWrapper>
    )
}

BrandsContentProducts.propTypes = {

}

export default BrandsContentProducts
