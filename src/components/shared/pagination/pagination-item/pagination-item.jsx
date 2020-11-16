import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { StyledWrapper } from './pagination-item.styled'

const PaginationItem = ({ text, currentPage, pager }) => {

    return (
        <StyledWrapper text={text} currentPage={currentPage} onClick={() => pager(text)}>
            {text}
        </StyledWrapper>
    )
}

PaginationItem.propTypes = {
    text: PropTypes.number,
    currentPage: PropTypes.number,
    pager: PropTypes.func
}

export default PaginationItem
