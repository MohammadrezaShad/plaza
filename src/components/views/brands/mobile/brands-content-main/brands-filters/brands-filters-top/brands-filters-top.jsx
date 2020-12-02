import React, { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import {
    StyledBlock,
    StyledText,
    StyledIcon,
    StyledFiltersCount,
    StyledCount
} from './brands-filters-top.styled'
import { disableBodyScroll, enableBodyScroll } from '../../../../../../../utils/body-scroll'
import IconProvider from '../../../../../../../providers/icon/icon-provider'
import Button from '../../../../../../shared/button'
import { buttonSizes, buttonVariants } from '../../../../../../../constants/button-configs'
import BrandsFiltersMenu from './brands-filters-menu'

const BrandsFiltersTop = props => {
    const [showFilters, setshowFilters] = useState(false)
    const toggleFilters = () => {
        setshowFilters(!showFilters);
    };

    useEffect(() => {
        if (showFilters) {
            disableBodyScroll();
        } else {
            enableBodyScroll();
        }
        return () => {
            if (showFilters) {
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
                    <StyledIcon as={IconProvider} icon="hamburger-menu" size="16px" />
                    <StyledFiltersCount>
                        <StyledCount>
                            1
                    </StyledCount>
                    </StyledFiltersCount>
                </Button>
            </StyledBlock>
            <StyledBlock>
                <Button variant={buttonVariants.OUTLINE} size={buttonSizes.S_MEDIUM}>
                    <StyledText>جدید ترین ها</StyledText>
                    <StyledIcon as={IconProvider} icon="hamburger-menu" size="16px" />
                </Button>
            </StyledBlock>
            <BrandsFiltersMenu showFilters={showFilters} toggleFilters={toggleFilters} />

        </Fragment>
    )
}

BrandsFiltersTop.propTypes = {

}

export default BrandsFiltersTop
