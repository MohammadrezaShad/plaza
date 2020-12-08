import React, { useEffect, useState } from "react";
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
import IconProvider from "../../../../../../../../../providers/icon/icon-provider";
import SwitchButton from "../../../../../../../../shared/form/switch-button";
import Button from "../../../../../../../../shared/button";
import { buttonSizes } from "../../../../../../../../../constants/button-configs";
import { useTranslation } from "react-i18next";

const BrandsFiltersMenu = ({ showFilters, toggleFilters, onChange, onClick, activeFiltersMain }) => {
    const [availableProduct, setAvailableProduct] = useState(false)
    const [specialSale, setSpecialSale] = useState(false)
    const [specialOffer, setSpecialOffer] = useState(false)
    const { t } = useTranslation()
    const availableProductChange = () => {
        setAvailableProduct(!availableProduct)
        onChange(1, t('availableProducts'))
    }
    const specialSaleChange = () => {
        setSpecialSale(!specialSale)
        onChange(2, t('specialSale'))

    }
    const specialOfferChange = () => {
        setSpecialOffer(!specialOffer)
        onChange(3, t('specialSale'))
    }

    useEffect(() => {
        if (!activeFiltersMain.length) {
            console.log('call')
            if (availableProduct) {
                setAvailableProduct(!availableProduct)
            }
            if (specialSale) {
                setSpecialSale(!specialSale)
            }
            if (specialOffer) {
                setSpecialOffer(!specialOffer)
            }
        } else {
            if (!activeFiltersMain.find(({ id }) => id === 1) && availableProduct) {
                setAvailableProduct(!availableProduct)
            }

            if (!activeFiltersMain.find(({ id }) => id === 2) && specialSale) {
                setSpecialSale(!specialSale)
            }

            if (!activeFiltersMain.find(({ id }) => id === 3) && specialOffer) {
                setSpecialOffer(!specialOffer)
            }

        }

    }, [activeFiltersMain])

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
                        <SwitchButton status={availableProduct} onChange={availableProductChange} text={t("brandsView.showAvailableProducts")} />
                    </StyledBlock>
                    <StyledSpecialBlock>
                        <SwitchButton status={specialOffer} onChange={specialOfferChange} text={t("specialOffer")} />
                        <SwitchButton status={specialSale} onChange={specialSaleChange} text={t("specialSale")} />
                    </StyledSpecialBlock>
                    <StyledBlock>

                    </StyledBlock>
                </StlyedContent>
            </StyledLayout>
            <StyledButton>
                <Button
                    onClick={onClick}
                    size={buttonSizes.LARGE}
                    text={t("brandsView.filterConfirm")}
                    matchParent={true}
                />
            </StyledButton>
        </StyledWrapper>
    );
};

BrandsFiltersMenu.propTypes = {
    showFilters: PropTypes.bool,
    toggleFilters: PropTypes.func,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    activeFiltersMain: PropTypes.array
};

export default BrandsFiltersMenu;
