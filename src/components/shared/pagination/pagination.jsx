import React, { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import { StyledIcon, StyledText } from './pagination.styled'
import PaginationItem from './pagination-item/pagination-item'
import Button from '../button/button'
import { buttonVariants } from '../../../constants/button-configs'
import IconProvider from '../../../providers/icon/icon-provider'

const Pagination = ({ totoalItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], itemPerPage = 5 }) => {
    const { t } = useTranslation()
    const [pages, setPages] = useState(Array.from({ length: Math.ceil(totoalItems.length / itemPerPage) }, (v, i) => i))
    const [currentPage, setCurrentPage] = useState(1)
    const [pageException, setPageException] = useState(5)
    const pager = (page) => {
        setCurrentPage(page)
    }

    const pageDown = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const pageUp = () => {
        if (currentPage !== pages.length) {
            setCurrentPage(currentPage + 1)
        }
    }

    const renderPages = () => {
        if (pageException >= pages.length) {
            return pages.map((item, index) => {
                return (
                    <PaginationItem
                        currentPage={currentPage}
                        pager={pager}
                        key={index}
                        text={index + 1} />
                )

            })
        } else {
            return pages.map((page, index) => {
                return (
                    <PaginationItem
                        currentPage={currentPage}
                        pager={pager}
                        key={index}
                        text={index + 1}
                        hidden={
                            index + 1 !== 1 &&
                            index + 1 !== pages.length &&
                            index + 1 !== currentPage + 1 &&
                            index + 1 !== currentPage &&
                            index + 1 !== currentPage - 1 &&
                            !(currentPage < 3 && index + 1 === 3) &&
                            !(currentPage === pages.length && index + 1 === pages.length - 2)
                        }
                        sperator={
                            (index + 1 === 4 && currentPage <= 2) ||
                            (index + 1 === pages.length - 3 && currentPage >= pages.length - 1) ||
                            (currentPage >= 4 && currentPage <= pages.length - 3 && (index + 1 === currentPage - 2 || index + 1 === currentPage + 2)) ||
                            (currentPage === 3 && index + 1 === 5) ||
                            (currentPage === pages.length - 2 && index + 1 === currentPage - 2)
                        }
                    />
                )

            })
        }

    }


    return (
        <Fragment>
            {
                pages.length > 1 ?
                    <Button onClick={pageDown} variant={buttonVariants.OUTLINE} $disabled={currentPage === 1} >
                        <StyledIcon as={IconProvider} icon="arrow-right" size="16px" />
                        <StyledText>{t("before")}</StyledText>
                    </Button> : null
            }

            {
                pages.length > 1 ? renderPages() : null
            }
            {
                pages.length > 1 ?
                    <Button onClick={pageUp} variant={buttonVariants.OUTLINE} $disabled={currentPage === pages.length}>
                        <StyledText>{t("next")}</StyledText>
                        <StyledIcon as={IconProvider} icon="arrow-left" size="16px" />
                    </Button> : null
            }

        </Fragment>
    )
}

Pagination.propTypes = {
    totoalItems: PropTypes.array,
    itemPerPage: PropTypes.number
}

export default Pagination
