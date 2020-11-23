import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { useSwipeable } from "react-swipeable";

import {
    StyledWrapper,
    StyledContainer,
    StyledHead,
    StyledItem,
    StlyedText,
    StyledItemWrap,
    StyledButtonWrap,
    StyledTitle,
    StyledContent
} from './sub-product-slider.styled'
import Button from '../button'
import { buttonSizes, buttonVariants } from '../../../constants/button-configs'
import IconProvider from '../../../providers/icon/icon-provider'
import { ReactComponent as ProductIcon } from '../../../assets/res/client/prod.svg';


const SubProductSlider = ({ children, items, defaultSpeed = 4, title }) => {

    const node = useRef(null)
    const wrapItemNode = useRef(null)
    const [viewWidth, setViewWidth] = useState(0)
    const [scrollWidth, setScrollWidth] = useState(0)
    const [moveRightSpeed, setMoveRightSpeed] = useState(defaultSpeed)
    const [moveLeftSpeed, setMoveLeftSpeed] = useState(defaultSpeed)
    const [itemWrap, setItemWrap] = useState(0)
    const [itemShowInView, setItemShowInView] = useState(0)
    const [showedItem, setShowedItem] = useState(0)
    const [rightMoveState, setRightMoveState] = useState(true)
    const [leftMoveState, setLeftMoveState] = useState(true)
    const [left, setLeft] = useState(0)

    const moveRightHandler = () => {
        if (rightMoveState && items.length > itemShowInView) {
            let progressWidth = left - (moveRightSpeed * itemWrap)
            if (progressWidth < 0) {
                setLeft(0)
                setShowedItem(itemShowInView)

            } else {
                setLeft(left - ((moveRightSpeed * itemWrap)))
                setShowedItem(showedItem - moveRightSpeed)
            }
        }
    }

    const resizeHandler = () => {
        setLeft(0)
        setViewWidth(node.current.offsetWidth)
        setScrollWidth(node.current.scrollWidth)
        setShowedItem(Math.floor(node.current.offsetWidth / wrapItemNode.current.offsetWidth))
        setItemShowInView(Math.floor(node.current.offsetWidth / wrapItemNode.current.offsetWidth))
    }

    const moveLeftHandler = () => {
        if (leftMoveState && items.length > itemShowInView) {
            let progressWidth = left + (moveLeftSpeed * itemWrap) + viewWidth
            if (progressWidth > scrollWidth) {
                setLeft(scrollWidth - viewWidth)
            } else {
                setLeft(left + ((moveLeftSpeed * itemWrap)))
            }
            setShowedItem(moveLeftSpeed + showedItem)
        }
    }



    const handlers = useSwipeable({
        onSwipedLeft: () => moveRightHandler(),
        onSwipedRight: () => moveLeftHandler(),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });


    useEffect(() => {
        setViewWidth(node.current.offsetWidth)
        setScrollWidth(node.current.scrollWidth)
        setItemWrap(wrapItemNode.current.offsetWidth)
        setShowedItem(Math.floor(node.current.offsetWidth / wrapItemNode.current.offsetWidth))
        setItemShowInView(Math.floor(node.current.offsetWidth / wrapItemNode.current.offsetWidth))
        window.addEventListener('resize', resizeHandler)
        return () => {
            window.removeEventListener('resize', resizeHandler);
        }
    }, [])

    useEffect(() => {
        console.log(showedItem)
        if (showedItem >= items.length && leftMoveState) {
            setLeftMoveState(false)
        } else if (!leftMoveState && showedItem < items.length) {
            setLeftMoveState(true)
        }

        if (showedItem + moveLeftSpeed > items.length && moveLeftSpeed === defaultSpeed) {
            setMoveLeftSpeed(items.length - showedItem)
        } else {
            setMoveLeftSpeed(defaultSpeed)

        }

        if (left <= 0 && rightMoveState) {
            setRightMoveState(false)
        } else if (left > 0 && !rightMoveState) {
            setRightMoveState(true)
        }
        if (left > 0 && (showedItem - moveRightSpeed < itemShowInView)) {
            setMoveRightSpeed(showedItem - itemShowInView)
        }
    }, [showedItem])

    return (
        <StyledContainer>
            <StyledHead>
                <StyledTitle>{title}</StyledTitle>

                {
                    items.length < itemShowInView ?
                        null :
                        <StyledButtonWrap>
                            <Button
                                variant={buttonVariants.OUTLINE}
                                size={buttonSizes.S_MEDIUM}
                                onClick={moveRightHandler}
                                $disabled={!rightMoveState}>
                                <IconProvider icon="arrow-right" size="16px" />
                            </Button>
                            <Button
                                variant={buttonVariants.OUTLINE}
                                size={buttonSizes.S_MEDIUM}
                                onClick={moveLeftHandler}
                                $disabled={!leftMoveState}>
                                <IconProvider icon="arrow-left" size="16px" />
                            </Button>
                        </StyledButtonWrap>
                }

            </StyledHead>
            <StyledContent {...handlers}>
                <StyledWrapper $left={left} ref={node} >
                    {
                        items.map(({ title, id }) => {
                            return <StyledItemWrap key={id} ref={wrapItemNode}>
                                <StyledItem >
                                    <ProductIcon />
                                    <StlyedText>
                                        {title}
                                    </StlyedText>
                                </StyledItem>
                            </StyledItemWrap>
                        })
                    }
                </StyledWrapper>
            </StyledContent>
        </StyledContainer>
    )
}

SubProductSlider.propTypes = {
    items: PropTypes.array
}

export default SubProductSlider
