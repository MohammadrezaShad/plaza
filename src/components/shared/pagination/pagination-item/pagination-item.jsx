import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { StyledWrapper, StyledSeparator } from './pagination-item.styled'

const PaginationItem = ({ text, currentPage, pager, hidden, sperator }) => {

    const renderHandler = () => {
        if (sperator) {
            return <StyledSeparator>...</StyledSeparator>
        } else if (!hidden) {
            return (
                <StyledWrapper text={text} currentPage={currentPage} onClick={() => pager(text)}>
                    {text}
                </StyledWrapper>
            )

        }
    }

    return (
        <Fragment>
            {
                renderHandler()
            }
        </Fragment>

    )
}

PaginationItem.propTypes = {
    text: PropTypes.number,
    currentPage: PropTypes.number,
    pager: PropTypes.func,
    hidden: PropTypes.bool,
    sperator: PropTypes.bool
}

export default PaginationItem
