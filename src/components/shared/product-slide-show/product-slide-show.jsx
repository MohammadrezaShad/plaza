import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSwipeable } from 'react-swipeable'

import {
    StyledWrapper,
    StlyedContainer,
    StyledHead,
    StyledTitle,
    StyledButtonWrap,
    StyledPreview
} from './product-slide-show.styled'
import ProductItem from '../product/product-item'
import Paths from '../../../utils/paths'
import ProdOne from "../../../assets/images/club/prod1test.png";
import ProdTwo from "../../../assets/images/club/prod2test.png";
import ProdThree from "../../../assets/images/club/prod3test.png";
import ProdFour from "../../../assets/images/club/prod4test.png";

import ProdSmOne from "../../../assets/res/client/prodSmallOne.png";
import ProdSmTwo from "../../../assets/res/client/prodSmallTwo.png";
import ProdSmThree from "../../../assets/res/client/prodSmallThree.png";
import ProdSmFour from "../../../assets/res/client/prodSmallFour.png";

import Button from "../button";
import { buttonSizes, buttonVariants } from "../../../constants/button-configs";
import IconProvider from "../../../providers/icon/icon-provider";
import ProductSlidePreview from './product-slide-preview'

const itemsTest = [
    {
        id: 1,
        href: Paths.home.getPath(),
        imgSrc: ProdOne,
        prevImg:ProdSmOne,
        title: "اسپیکر بلوتوث مشکی رنگ کیفیت عالی دارای امکانات خیلی زیاد",
        price: 3000000,
        offPrice: 2550000,
        point: 102
    },
    {
        id: 2,
        href: Paths.home.getPath(),
        imgSrc: ProdTwo,
        prevImg:ProdSmTwo,
        title: "اسپیکر بلوتوث مشکی رنگ کیفیت عالی دارای امکانات خیلی زیاد",
        price: 3000000,
        offPrice: 2550000,
        point: 102
    },
    {
        id: 3,
        href: Paths.home.getPath(),
        imgSrc: ProdThree,
        prevImg:ProdSmThree,
        title: "اسپیکر بلوتوث مشکی رنگ کیفیت عالی دارای امکانات خیلی زیاد",
        price: 3000000,
        offPrice: 2550000,
        point: 102
    },
    {
        id: 4,
        href: Paths.home.getPath(),
        imgSrc: ProdFour,
        prevImg:ProdSmFour,
        title: "اسپیکر بلوتوث مشکی رنگ کیفیت عالی دارای امکانات خیلی زیاد",
        price: 3000000,
        offPrice: 2550000,
        point: 102
    }
]
const ProductSlideShow = ({ items = itemsTest, title }) => {

    const [itemShowed, setItemShowed] = useState(1)
    const [rightArrowStatus, setRightArrowStatus] = useState(true)
    const [leftArrowStatus, setLeftArrowStatus] = useState(true)
    const [selectedItem, setSelectedItem] = useState(0)
     
    const handlers = useSwipeable({
        onSwipedLeft: () => moveRightHandler(),
        onSwipedRight: () => moveLeftHandler(),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    const moveLeftHandler = () => {
        if (leftArrowStatus) {
            setSelectedItem(selectedItem + 1)
            setItemShowed(itemShowed + 1)
        }
    }
    const moveRightHandler = () => {
        if (rightArrowStatus) {
            setSelectedItem(selectedItem - 1)
            setItemShowed(itemShowed - 1)
        }
    }

    const onClick=(index)=>{
        setSelectedItem(index)
        setItemShowed(index + 1)
    }

    useEffect(() => {
        if (selectedItem === 0 && rightArrowStatus) {
            setRightArrowStatus(false)
        } else if (selectedItem !== 0 && !rightArrowStatus) {
            setRightArrowStatus(true)
        }

        if (itemShowed === items.length && leftArrowStatus) {
            setLeftArrowStatus(false)
        } else if (itemShowed !== items.length && !leftArrowStatus) {
            setLeftArrowStatus(true)
        }

    }, [itemShowed])

    return (
        <StyledWrapper>
            <StyledHead>
                <StyledTitle>{title}</StyledTitle>
                <StyledButtonWrap>
                    <Button
                        variant={buttonVariants.OUTLINE}
                        size={buttonSizes.S_MEDIUM}
                        onClick={moveRightHandler}
                        $disabled={!rightArrowStatus}>
                        <IconProvider icon="arrow-right" size="16px" />
                    </Button>
                    <Button
                        variant={buttonVariants.OUTLINE}
                        size={buttonSizes.S_MEDIUM}
                        onClick={moveLeftHandler}
                        $disabled={!leftArrowStatus}>
                        <IconProvider icon="arrow-left" size="16px" />
                    </Button>
                </StyledButtonWrap>
            </StyledHead>
            <StlyedContainer selectedItem={selectedItem} {...handlers}>
                {

                    items.map(({ id, href, imgSrc, title, price, offPrice, point }) => {
                        return (
                            <ProductItem
                                key={id}
                                href={href}
                                imgSrc={imgSrc}
                                title={title}
                                price={price}
                                offPrice={offPrice}
                                point={point}
                                $alignRight
                                mask={true}
                                colors={false}
                                imgPaddingUnit={8}
                                itemPaddingUnit={[4, 4]}
                            />

                        )
                    })

                }
            </StlyedContainer>
            <StyledPreview>
                {

                    items.map(({ id, href, prevImg, title, price, offPrice, point },index) => {
                        return (
                            <ProductSlidePreview 
                            key={index} 
                            index={index} 
                            prevImg={prevImg}
                            onClick={onClick}
                            selectedItem={selectedItem}
                            />
                        )
                    })

                }
            </StyledPreview>
        </StyledWrapper>
    )
}

ProductSlideShow.propTypes = {

}

export default ProductSlideShow
