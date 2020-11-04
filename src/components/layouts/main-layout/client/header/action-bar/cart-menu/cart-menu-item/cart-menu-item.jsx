import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

import {
    StyledImageButton,
    StyledImage,
    StyledContent,
    StyledTitle,
    StyledButton,
    StyledDetail,
    StyledDetailText,
    StyledPrice
} from './cart-menu-item.styled'
import IconProvider from '../../../../../../../../providers/icon/icon-provider'
import { useTranslation } from 'react-i18next'

const CartMenuItem = ({ id, photo, title, url, price, count, feature, onDelete }) => {
    const {t} = useTranslation()

    const removeHandler = (e) => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        onDelete && onDelete(id);
    }

    return (
        <Fragment>
            <StyledImageButton as={Link} to={url}>
                <StyledImage src={photo} alt={title} />
            </StyledImageButton>
            <StyledContent>
                <StyledTitle as={Link} to={url}>{title}</StyledTitle>
                <StyledDetail>
                    <StyledDetailText>
                        <StyledPrice>{price.toLocaleString()}</StyledPrice> {t('currencyUnit')}
                    </StyledDetailText>
                    <StyledDetailText><span>{count} {t('count')}</span><span>{feature}</span></StyledDetailText>
                </StyledDetail>
            </StyledContent>
            <StyledButton onClick={removeHandler}>
                <IconProvider icon="delete-o" size="20px"/>
            </StyledButton>
        </Fragment>
    )
}

CartMenuItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    photo: PropTypes.string,
    url: PropTypes.string,
    price: PropTypes.number,
    count: PropTypes.number,
    feature: PropTypes.string,
    onDelete: PropTypes.func
}

export default CartMenuItem
