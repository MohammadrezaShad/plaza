import React, { useState } from "react";
import PropTypes from "prop-types";

import {
    StyledWrapper,
    StyledLayout,
    StyledHead,
    StyledHeadText,
    StyledIcon,
    StlyedContent,
    StyledBlock,
    StyledSpecialBlock,
    StyledButton
} from "./brands-filters-menu.styled";
import IconProvider from "../../../../../../../../providers/icon/icon-provider";
import SwitchButton from "../../../../../../../shared/form/switch-button";
import Button from "../../../../../../../shared/button";
import { buttonSizes } from "../../../../../../../../constants/button-configs";

const BrandsFiltersMenu = ({ showFilters, toggleFilters }) => {
    const [availableProduct, setAvailableProduct] = useState(false)
    const [specialSale, setSpecialSale] = useState(false)
    const [specialOffer, setSpecialOffer] = useState(false)

    const availableProductChange = () => {
        setAvailableProduct(!availableProduct)
    }
    const specialSaleChange = () => {
        setSpecialSale(!specialSale)
    }
    const specialOfferChange = () => {
        setSpecialOffer(!specialOffer)
    }
    return (
        <StyledWrapper showFilters={showFilters}>
            <StyledHead>
                <StyledHeadText>فیلتر محصولات</StyledHeadText>
                <StyledIcon
                    onClick={toggleFilters}
                    as={IconProvider}
                    icon="close"
                    size="16px"
                />
            </StyledHead>
            <StyledLayout showFilters={showFilters}>
                <StlyedContent>
                    <StyledBlock>
                        <SwitchButton onChange={availableProductChange} text="نمایش فقط کالاهای موجود" />
                    </StyledBlock>
                    <StyledSpecialBlock>
                        <SwitchButton onChange={specialOfferChange} text="پیشنهاد ویژه" />
                        <SwitchButton onChange={specialSaleChange} text="فروش ویژه" />
                    </StyledSpecialBlock>
                    <StyledBlock>

                    </StyledBlock>
                </StlyedContent>
            </StyledLayout>
            <StyledButton>
                <Button size={buttonSizes.LARGE} text="تایید فیلتر" matchParent={true} />
            </StyledButton>
        </StyledWrapper>
    );
};

BrandsFiltersMenu.propTypes = {
    showFilters: PropTypes.bool,
    toggleFilters: PropTypes.func,
};

export default BrandsFiltersMenu;
