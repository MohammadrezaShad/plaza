import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { StyledWrapper } from './pagination-item.styled'

const PaginationItem = ({ text,pager,currentPage }) => {
    const [selectedPage, setSelectedPage] = useState(false)
    const pageChange=()=>{
        pager(text)
    }
    
    useEffect(() => {
        if (currentPage===text && !selectedPage){
            setSelectedPage(true)
        }else if(currentPage !==text && selectedPage) {
            setSelectedPage(false)
        }
    }, [currentPage])

    return (
        <StyledWrapper selectedPage={selectedPage} onClick={pageChange}>
            {text}
        </StyledWrapper>
    )
}

PaginationItem.propTypes = {
    text: PropTypes.number,
    currentPage:PropTypes.number,
    pager:PropTypes.func
}

export default PaginationItem
