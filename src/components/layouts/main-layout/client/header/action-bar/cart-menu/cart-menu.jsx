import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { useHistory } from "react-router-dom";

import { useTranslation } from 'react-i18next'
import { removeAll, remove } from '../../../../../../../redux/actions/cart-actions'

import Button from '../../../../../../shared/button/button'
import { buttonColors, buttonSizes, buttonVariants } from '../../../../../../../constants/button-configs'
import CartMenuItem from './cart-menu-item/cart-menu-item';
import WithCartState from '../../../../../../../hoc/with-cart-state'
import Paths from '../../../../../../../utils/paths'
import HeaderMenu from '../header-menu'
import CartMenuEmpty from './cart-menu-empty'

import {
    StyledWrapper,
    StyledHeader,
    StyledTitle,
    StyledContent,
    StyledItem,
    StyledFooter,
    StyledFooterContent,
    StyledFooterText,
    StyledFooterPrice,
    StyledFooterActions,
} from './cart-menu.styled'


const CartMenu = ({items, payablePrice}) => {
    const history = useHistory();
    const [isOpen, setIsOpen] = useState(false);
    const {t} = useTranslation();
    const dispatch = useDispatch()
    const length = items instanceof Array ? items.length : 0
    const count = length ? items.reduce((a, b) => ({count: a.count + b.count})).count : 0

    const removeAllHandler = () => {
        dispatch(removeAll())
    }

    const removeHandler = (id) => {
        dispatch(remove(id))
    }

    const openHandler = () => {
        setIsOpen(true);
    }

    const createOrderHandler = () => {
        history.push(Paths.order.index.getPath());
    }

    return (
        <HeaderMenu icon="cart-o" count={count} hasHeader={!!count} onOpen={openHandler}>
            {
                !isOpen
                ?
                null:
                length > 0
                ?
                <StyledWrapper>
                    <StyledHeader>
                        <StyledTitle>{t('cartMenuTitle').replace(/<!--count-->/g, count)}</StyledTitle>
                        <Button variant={buttonVariants.LINK} color={buttonColors.SECONDARY} size={buttonSizes.SMALL} text={t('deleteAll')} onClick={removeAllHandler}/>
                    </StyledHeader>
                    <StyledContent>
                        {
                            items.map((data, index) => (
                                <StyledItem key={index}>
                                    <CartMenuItem 
                                        id={data.id}
                                        title={data.title} 
                                        url={Paths.product.detail(data.id).getPath()} 
                                        photo={data.photo}
                                        price={data.price}
                                        count={data.count}
                                        feature={data.feature}
                                        onDelete={removeHandler}
                                        />
                                </StyledItem>
                                )
                            )
                        }
                    </StyledContent>
                    <StyledFooter>
                        <StyledFooterContent>
                            <StyledFooterText>{t('payablePrice')}</StyledFooterText>
                            <StyledFooterPrice>{`${(payablePrice || 0).toLocaleString()} ${t('currencyUnit')}`} </StyledFooterPrice>
                        </StyledFooterContent>
                        <StyledFooterActions>
                            <Button text={t('createOrder')} matchParent={true} onClick={createOrderHandler} />
                        </StyledFooterActions>
                    </StyledFooter>
                </StyledWrapper>
                :
                <CartMenuEmpty />
            }
        </HeaderMenu>
    )
}

CartMenu.propTypes = {
    totalPrice: PropTypes.number
}

export default WithCartState(React.memo(CartMenu))
