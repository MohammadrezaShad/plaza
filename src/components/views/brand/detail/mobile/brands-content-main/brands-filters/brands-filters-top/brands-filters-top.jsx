import React, { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
    StyledBlock,
    StyledText,
    StyledIcon,
    StyledFiltersCount,
    StyledCount
} from './brands-filters-top.styled'
import { disableBodyScroll, enableBodyScroll } from '../../../../../../../../utils/body-scroll'
import IconProvider from '../../../../../../../../providers/icon/icon-provider'
import Button from '../../../../../../../shared/button'
import { buttonSizes, buttonVariants } from '../../../../../../../../constants/button-configs'
import BrandsFiltersMenu from './brands-filters-menu'
import Sort from '../../../../../../../dialogs/brands/sort'
const sorts = [
    { title: "جدیدترن ها", id: 1 },
    { title: "گران ترین ها", id: 2 },
    { title: "ارزان ترین ها", id: 3 },
    { title: "جدید ترن ها", id: 4 },
    { title: "پرفورش ترین ها", id: 5 }]

const BrandsFiltersTop = ({ activeFiltersMain, onChange, onClick }) => {
    const [showFilters, setshowFilters] = useState(false)
    const [showSort, setShowSort] = useState(false)
    const [sortText, setSortText] = useState(sorts[0]?.title)
    const toggleFilters = () => {
        setshowFilters(!showFilters);
    };
    const openSort = () => {
        setShowSort(true)
    }
    const closeSort = () => {
        setShowSort(false)

    }
    const sortChange = (title) => {
        setSortText(title)
    }
    useEffect(() => {
        if (showFilters || showSort) {
            disableBodyScroll();
        } else if (!showFilters && !showSort) {
            enableBodyScroll();
        }
        return () => {
            if (showFilters || showSort) {
                enableBodyScroll();
            }
        };
    }, [showFilters]);

    return (
        <Fragment>
            <StyledBlock>
                <Button
                    variant={buttonVariants.OUTLINE}
                    size={buttonSizes.S_MEDIUM}
                    onClick={toggleFilters}
                >
                    <StyledText>فیلتر</StyledText>
                    <StyledIcon as={IconProvider} icon="filter" size="16px" />
                    {
                        activeFiltersMain.length ?
                            <StyledFiltersCount>
                                <StyledCount>
                                    {activeFiltersMain.length}
                                </StyledCount>
                            </StyledFiltersCount> : null
                    }
                </Button>
            </StyledBlock>
            <StyledBlock>
                <Button
                    onClick={openSort}
                    variant={buttonVariants.OUTLINE}
                    size={buttonSizes.S_MEDIUM}>
                    <StyledText>
                        {sortText}
                    </StyledText>
                    <StyledIcon as={IconProvider} icon="sort" size="16px" />
                </Button>
            </StyledBlock>
            <BrandsFiltersMenu
                onChange={onChange}
                onClick={onClick}
                showFilters={showFilters}
                toggleFilters={toggleFilters}
                activeFiltersMain={activeFiltersMain}
            />
            <Sort onChange={sortChange} sorts={sorts} open={showSort} onClose={closeSort} />
        </Fragment>
    )
}

BrandsFiltersTop.propTypes = {
    activeFiltersMain: PropTypes.array,
    onChange: PropTypes.func,
    onClick: PropTypes.func
}

export default BrandsFiltersTop
