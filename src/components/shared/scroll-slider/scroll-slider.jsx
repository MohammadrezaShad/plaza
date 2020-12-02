import React, { useState } from 'react'
import PropTypes from 'prop-types'

import {
    StyledWrapper,
    StyledHead,
    StyledTitle,
    StyledContainer,
    StyledItem,
    StyledContent
} from './scroll-slider.styled'
import ProductItem from '../product/product-item'
import Paths from '../../../utils/paths'
import ProdOne from "../../../assets/images/club/prod1test.png";
import ProdTwo from "../../../assets/images/club/prod2test.png";
import ProdThree from "../../../assets/images/club/prod3test.png";
import ProdFour from "../../../assets/images/club/prod4test.png";

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


const ScrollSlider = ({ items = itemsTest, title, imgWidth }) => {
    const [hoverItem, sethoverItem] = useState(null)
    return (
        <StyledWrapper >
            <StyledHead>
                <StyledTitle >
                    {title}
                </StyledTitle>
            </StyledHead>
            <StyledContent>
                <StyledContainer>
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
                                <StyledItem
                                    key={id}
                                    onMouseEnter={() => sethoverItem(id)}
                                    onMouseLeave={() => sethoverItem(null)}
                                >
                                    <ProductItem
                                        id={id}
                                        href={href}
                                        imgSrc={imgSrc}
                                        title={title}
                                        price={price}
                                        favorite={true}
                                        offPrice={offPrice}
                                        point={point}
                                        imgWidth="180px"
                                        gilMark={false}
                                        $alignRight={true}
                                        hover={hoverItem === id}
                                    />
                                </StyledItem>
                            )
                        })
                    }
                </StyledContainer>
            </StyledContent>
        </StyledWrapper >
    )
}

ScrollSlider.propTypes = {
    items: PropTypes.array,
    title: PropTypes.string
}

export default ScrollSlider
