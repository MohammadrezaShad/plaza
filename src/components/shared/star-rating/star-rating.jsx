import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { StyledWrapper, StyledText } from './star-rating.styled'
import StarRatingItem from './star-rating-item'

const StarRating = ({ rate = 0, items = [1, 2, 3, 4, 5], liveHover = false,children}) => {
    const [rating, setRating] = useState(rate);
    const [hoverRating, setHoverRating] = useState(0);
    const onMouseMove = (index, e) => {
        let percentage = (e.clientX - e.currentTarget.getClientRects()[0].left) / e.currentTarget.offsetWidth * 100
        if (0 <= percentage && percentage <= 50) {
            setHoverRating(index - 0.5);
        } else if (0 <= percentage) {
            setHoverRating(index)
        }
    };
    const onMouseLeave = () => {
        setHoverRating(0)
    };

    const onSaveRating = function(index, e) {
        let percentage = (e.clientX - e.currentTarget.getClientRects()[0].left) / e.currentTarget.offsetWidth * 100
        if (0 <= percentage && percentage <= 50) {
            setRating(index - 0.5);
        } else if (0 <= percentage) {
            setRating(index)
        } else if (percentage < 0 && index > 1) {
            setRating(index - 1);
        }
    };
    const renderStars = () => {
        return items.map((index) => {
            return (
                <StarRatingItem key={index}
                    rating={rating}
                    hoverRating={hoverRating}
                    index={index}
                    onMouseMove={onMouseMove}
                    onSaveRating={onSaveRating}
                    liveHover={liveHover}
                />
            )
        })
    }
    return (
        <StyledWrapper onMouseLeave={liveHover ? onMouseLeave : null}>
            {renderStars()}
            {children}
        </StyledWrapper>
    )
}

StarRating.propTypes = {
    rate: PropTypes.number,
    items: PropTypes.array,
    liveHover: PropTypes.bool
}

export default StarRating
