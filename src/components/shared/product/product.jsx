import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import { StyledWrapper, StyledContent, StyledContainer, StyledIcon } from "./product.styled";
import ProductItem from "../../shared/product/product-item";
import Paths from "../../../utils/paths";
import ProdOne from "../../../assets/images/club/prod1test.png";
import ProdTwo from "../../../assets/images/club/prod2test.png";
import ProdThree from "../../../assets/images/club/prod3test.png";
import ProdFour from "../../../assets/images/club/prod4test.png";
import Button from "../button";
import { buttonSizes, buttonVariants } from "../../../constants/button-configs";
import IconProvider from "../../../providers/icon/icon-provider";

const Product = (props) => {
    const node = useRef()
    const [itemWidth, setItemWidth] = useState(0)
    const [parentScrollWidth, setParentScrollWidth] = useState(0)
    const [parentWidth, setParentWidth] = useState(0)
    const [rightArrowStatus, setRightArrowStatus] = useState(false)
    const [leftArrowStatus, setLeftArrowStatus] = useState(false)
    const [left, setLeft] = useState(0)

    const itemWidthHandler = (width) => {
        setItemWidth(width)
    }
    const moveLeftHandler = () => {
        if (leftArrowStatus) {
            setLeft(left + itemWidth)
        }
    }
    const moveRightHandler = () => {
        if (rightArrowStatus) {
            setLeft(left - itemWidth)
        }
    }

    useEffect(() => {
        setParentScrollWidth(node.current.scrollWidth)
        setParentWidth(node.current.clientWidth)
    }, [])
    useEffect(() => {
        if (left <= 0 && rightArrowStatus) {
            setRightArrowStatus(false)
        } else if (left > 0 && !rightArrowStatus) {
            setRightArrowStatus(true)
        }

        if (Math.abs(left) + parentWidth >= parentScrollWidth && leftArrowStatus) {
            setLeftArrowStatus(false)
        } else if (Math.abs(left) + parentWidth <= parentScrollWidth && !leftArrowStatus) {
            setLeftArrowStatus(true)
        }
    }, [left])

    return (
        <StyledWrapper>
            <Button variant={buttonVariants.OUTLINE} size={buttonSizes.S_MEDIUM} onClick={moveRightHandler} $disabled={!rightArrowStatus}>
                <IconProvider icon="arrow-right" size="16px" />
            </Button>
            <Button variant={buttonVariants.OUTLINE} size={buttonSizes.S_MEDIUM} onClick={moveLeftHandler} $disabled={!leftArrowStatus}>
                <IconProvider icon="arrow-left" size="16px" />
            </Button>
            <StyledContent ref={node} $left={left}>
                <StyledContainer>
                    <ProductItem
                        href={Paths.home.getPath()}
                        imgSrc={ProdOne}
                        title="اسپیکر بلوتوث مشکی رنگ کیفیت عالی دارای امکانات خیلی زیاد"
                        price={3000000}
                        offPrice={2550000}
                        point={102}
                        Product={true}
                        itemWidth={itemWidth}
                        itemWidthHandler={itemWidthHandler}
                    />

                    <ProductItem
                        href={Paths.home.getPath()}
                        imgSrc={ProdTwo}
                        title="دسته بازی پلی استیشن 4 قرمز رنگ"
                        price={3000000}
                        offPrice={2550000}
                        point={102}
                        Product={true}
                    />

                    <ProductItem
                        href={Paths.home.getPath()}
                        imgSrc={ProdThree}
                        title="هدفون مشکی بی سیم به همراه کاپ های قرمز رنگ"
                        price={3000000}
                        offPrice={2550000}
                        point={102}
                        Product={true}
                    />

                    <ProductItem
                        href={Paths.home.getPath()}
                        imgSrc={ProdFour}
                        title="موس گیمینگ زرد رنگ به امکانات حرفه ای برای گیمیر ها"
                        price={3000000}
                        offPrice={2550000}
                        point={102}
                        Product={true}
                    />
                    <ProductItem
                        href={Paths.home.getPath()}
                        imgSrc={ProdFour}
                        title="موس گیمینگ زرد رنگ به امکانات حرفه ای برای گیمیر ها"
                        price={3000000}
                        offPrice={2550000}
                        point={102}
                        Product={true}
                    />
                </StyledContainer>
            </StyledContent>
        </StyledWrapper>
    );
};

Product.propTypes = {};

export default Product;
