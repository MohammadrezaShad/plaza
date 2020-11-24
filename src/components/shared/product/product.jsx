import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useSwipeable } from "react-swipeable";

import {
    StyledWrapper,
    StyledContent,
    StyledBlock,
    StyledContainer,
    StyledProducts,
    StyledButtonWrap,
    StyledHead,
    StyledTitle
} from "./product.styled";
import ProductItem from "../../shared/product/product-item";
import Paths from "../../../utils/paths";
import ProdOne from "../../../assets/images/club/prod1test.png";
import ProdTwo from "../../../assets/images/club/prod2test.png";
import ProdThree from "../../../assets/images/club/prod3test.png";
import ProdFour from "../../../assets/images/club/prod4test.png";
import Button from "../button";
import { buttonSizes, buttonVariants } from "../../../constants/button-configs";
import IconProvider from "../../../providers/icon/icon-provider";
const itemsTest = [
    {
        id:1,
        href: Paths.home.getPath(),
        imgSrc: ProdOne,
        title: "اسپیکر بلوتوث مشکی رنگ کیفیت عالی دارای امکانات خیلی زیاد",
        price: 3000000,
        offPrice: 2550000,
        point: 102
    },
    {
        id:2,
        href: Paths.home.getPath(),
        imgSrc: ProdTwo,
        title: "اسپیکر بلوتوث مشکی رنگ کیفیت عالی دارای امکانات خیلی زیاد",
        price: 3000000,
        offPrice: 2550000,
        point: 102
    },
    {
        id:3,
        href: Paths.home.getPath(),
        imgSrc: ProdThree,
        title: "اسپیکر بلوتوث مشکی رنگ کیفیت عالی دارای امکانات خیلی زیاد",
        price: 3000000,
        offPrice: 2550000,
        point: 102
    },
    {
        id:4,
        href: Paths.home.getPath(),
        imgSrc: ProdFour,
        title: "اسپیکر بلوتوث مشکی رنگ کیفیت عالی دارای امکانات خیلی زیاد",
        price: 3000000,
        offPrice: 2550000,
        point: 102
    },
    {
        id:5,
        href: Paths.home.getPath(),
        imgSrc: ProdTwo,
        title: "اسپیکر بلوتوث مشکی رنگ کیفیت عالی دارای امکانات خیلی زیاد",
        price: 3000000,
        offPrice: 2550000,
        point: 102
    }
]
const Product = ({
    items = itemsTest,
    buttonTopLeft,
    alignRight = true,
    title,
    marginHead = true,
    borderTitle = true,
    imgPaddingUnit,
    children
}) => {
    const [pageSpeed, setPageSpeed] = useState(4)
    const [itemWidth, setItemWidth] = useState(25)
    const [windowWidth, setWindowWidth] = useState(1600)
    const [itemToShow, setItemToShow] = useState(4)
    const [itemShowed, setItemShowed] = useState(itemToShow)
    const [remainingItem, setRemainingItem] = useState(items.length - itemShowed)
    const [rightArrowStatus, setRightArrowStatus] = useState(true)
    const [leftArrowStatus, setLeftArrowStatus] = useState(true)
    const [left, setLeft] = useState(0)

    const handlers = useSwipeable({
        onSwipedLeft: () => moveRightHandler(),
        onSwipedRight: () => moveLeftHandler(),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    const moveLeftHandler = () => {
        if (leftArrowStatus) {
            if (remainingItem < pageSpeed) {
                setLeft(left + remainingItem)
                setRemainingItem(0)
                setItemShowed(itemShowed + remainingItem)
            } else {
                setRemainingItem(remainingItem - pageSpeed)
                setLeft(left + pageSpeed)
                setItemShowed(itemShowed + pageSpeed)
            }
        }
    }
    const moveRightHandler = () => {
        if (rightArrowStatus) {
            if (itemShowed - pageSpeed < pageSpeed) {
                setRemainingItem(items.length - pageSpeed)
                setLeft(left - (itemShowed - pageSpeed))
                setItemShowed(itemShowed - (itemShowed - pageSpeed))
            } else {
                setRemainingItem(remainingItem + pageSpeed)
                setLeft(left - pageSpeed)
                setItemShowed(itemShowed - pageSpeed)
            }

        }
    }
    const resizeHandler = () => {
        setWindowWidth(window.innerWidth)
    };

    useEffect(() => {
        setPageSpeed(window.innerWidth > 1280 ? 4 : 3)
        setItemWidth(window.innerWidth > 1280 ? 25 : 33.33)
        setWindowWidth(window.innerWidth)
        setItemToShow(window.innerWidth > 1280 ? 4 : 3)
    }, [])

    useEffect(() => {
        if (windowWidth <= 1280 && itemWidth !== 33.33) {
            setItemToShow(3)
            setPageSpeed(3)
            setRemainingItem(remainingItem + 1)
            setItemShowed(itemShowed - 1)
            setItemWidth(33.33)
        } else if (windowWidth > 1280 && itemWidth === 33.33) {
            setItemToShow(4)
            setPageSpeed(4)
            if (itemShowed === items.length) {
                setLeft(left - 1)
            } else {
                setItemShowed(itemShowed + 1)
                setRemainingItem(remainingItem - 1)
            }
            setItemWidth(25)
        }

        if ((itemShowed === itemToShow) || (itemToShow >= items.length && rightArrowStatus)) {
            setRightArrowStatus(false)
        } else if (!rightArrowStatus) {
            setRightArrowStatus(true)
        }
        if ((itemShowed === items.length) || (itemToShow >= items.length && leftArrowStatus)) {
            setLeftArrowStatus(false)
        } else if (!leftArrowStatus) {
            setLeftArrowStatus(true)
        }
        window.addEventListener('resize', resizeHandler)
        return () => {
            window.removeEventListener('resize', resizeHandler);
        }
    }, [itemShowed, itemToShow, itemWidth, windowWidth, left, remainingItem, pageSpeed])



    return (
        <StyledBlock >
            <StyledHead borderTitle={borderTitle} marginHead={marginHead}>
                <StyledTitle >
                    {title}
                </StyledTitle>
                {
                    items.length > itemToShow ?
                        <StyledButtonWrap buttonTopLeft={buttonTopLeft}>
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
                        </StyledButtonWrap> : null
                }
            </StyledHead>
            <StyledWrapper buttonTopLeft={buttonTopLeft}>
                {
                    children ?
                        <StyledProducts {...handlers}>
                            <StyledContent $left={left} itemWidth={itemWidth}>
                                <StyledContainer>
                                    {children}
                                </StyledContainer>
                            </StyledContent>
                        </StyledProducts>
                        :
                        <StyledProducts {...handlers}>
                            <StyledContent $left={left} itemWidth={itemWidth}>
                                <StyledContainer>
                                    {
                                        items.map(({id,href, imgSrc, title, price, offPrice, point }) => {
                                            return (
                                                <ProductItem
                                                key={id}
                                                href={href}
                                                imgSrc={imgSrc}
                                                title={title}
                                                price={price}
                                                offPrice={offPrice}
                                                point={point}
                                                $alignRight={alignRight}
                                                imgPaddingUnit={imgPaddingUnit}
                                            />
                                            )
                                        })
                                    }
                                </StyledContainer>
                            </StyledContent>
                        </StyledProducts>
                }

            </StyledWrapper>
        </StyledBlock>
    );
};

Product.propTypes = {
    items: PropTypes.array,
    buttonTopLeft: PropTypes.bool,
    alignRight: PropTypes.bool,
};

export default Product;
