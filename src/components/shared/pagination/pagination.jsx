import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'

import { StyledIcon, StyledText } from './pagination.styled'
import PaginationItem from './pagination-item/pagination-item'
import Button from '../button/button'
import { buttonVariants } from '../../../constants/button-configs'
import IconProvider from '../../../providers/icon/icon-provider'

const Pagination = ({ }) => {
    const [items, setItems] = useState([1, 2, 3, 4])
    const [currentPage, setCurrentPage] = useState(1)
    const pager = (page) => {
        setCurrentPage(page)
    }

    const pageDown = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const pageUp = () => {
        if (currentPage !== items.length) {
            setCurrentPage(currentPage + 1)
        }
    }

    return (
        <Fragment>
            <Button onClick={pageDown} variant={buttonVariants.OUTLINE} $disabled={currentPage===1}>
                <StyledIcon as={IconProvider} icon="arrow-right" size="16px" />
                <StyledText>قبلی</StyledText>
            </Button>
            {
                items.map((item, index) => {
                    return <PaginationItem currentPage={currentPage} pager={pager} key={index} text={item} />
                })
            }
            <Button onClick={pageUp} variant={buttonVariants.OUTLINE} $disabled={currentPage===items.length}>
                <StyledText>بعدی</StyledText>
                <StyledIcon as={IconProvider} icon="arrow-left" size="16px" />
            </Button>
        </Fragment>
    )
}

Pagination.propTypes = {

}

export default Pagination
