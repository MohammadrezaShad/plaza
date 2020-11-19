import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { StyledWrapper, StyledIconPrimary, StyledIconEmpty, StyledIconHalf } from './star-rating-item.styled'
import IconProvider from '../../../../providers/icon/icon-provider'

const StarRatingItem = ({
    index,
    rating,
    hoverRating,
    onMouseMove,
    onSaveRating,
    liveHover }) => {

    const [fill, setFill] = useState(false)
    const starRender = (type) => {
        switch (type) {
            case 'full':
                return <StyledIconPrimary as={IconProvider} icon="star" size="17px" />

            case 'half':
                return <StyledIconHalf as={IconProvider} icon="half-star" size="17px" />

            default:
                return <StyledIconEmpty as={IconProvider} icon="star-outline" size="17px" />
        }
    }
    useEffect(() => {
        if (hoverRating >= index) {
            setFill('full')
        } else if (hoverRating === index - 0.5) {
            setFill('half')
        } else if (!hoverRating && rating >= index) {
            setFill('full')
        } else if (!hoverRating && rating === index - 0.5) {
            setFill('half')
        } else {
            setFill(null)
        }
    }, [rating, hoverRating])
    return (
        <StyledWrapper
            index={index}
            onMouseMove={(e) => liveHover ? onMouseMove(index, e) : null}
            onClick={(e) => onSaveRating(index, e)}
            $fill={fill}>
            {starRender(fill)}
        </StyledWrapper>
    )
}

StarRatingItem.propTypes = {
    index: PropTypes.number,
    rating: PropTypes.number,
    hoverRating: PropTypes.number,
    onMouseMove: PropTypes.func,
    onSaveRating: PropTypes.func,
    liveHover: PropTypes.bool
}

export default StarRatingItem
