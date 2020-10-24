import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import HeaderMenu from '../header-menu'
import CartMenuEmpty from './cart-menu-empty';
import {
    removeAll,
    remove
} from '../../../../../../../redux/actions/cart-actions'

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
import { useTranslation } from 'react-i18next';
import Button from '../../../../../../shared/button/button';
import { buttonColors, buttonSizes, buttonVariants } from '../../../../../../../constants/button-configs';
import CartMenuItem from './cart-menu-item/cart-menu-item';
import WithCartState from '../../../../../../../hoc/with-cart-state';
import Paths from '../../../../../../../utils/paths';

const CartMenu = ({items, payablePrice}) => {
    const [isOpen, setIsOpen] = useState(false);
    const {t} = useTranslation();
    const dispatch = useDispatch()

    const removeAllHandler = () => {
        dispatch(removeAll())
    }

    const removeHandler = (id) => {
        dispatch(remove(id))
    }

    // items = [
    //     {
    //         title:'دسته بازی گیمینگ مشکی بی سیم تسکو مدل TG 134W',
    //         url:'/test',
    //         price:1200,
    //         count:1,
    //         feature:'مشکی قرمز'
    //     },
    //     {
    //         title:'دسته بازی گیمینگ مشکی بی سیم تسکو مدل TG 134W',
    //         url:'/test1',
    //         price:2200,
    //         count:1,
    //         feature:"آبی"
    //     },
    //     {
    //         title:'دسته بازی گیمینگ مشکی بی سیم تسکو مدل TG 134W',
    //         url:'/test1',
    //         price:2200,
    //         count:10,
    //         feature:"سبز"
    //     }
    // ]

    const length = items instanceof Array ? items.length : 0;

    const openHandler = () => {
        setIsOpen(true);
    }

    


    return (
        <HeaderMenu icon="cart-o" count={length} hasHeader={!!length} onOpen={openHandler}>
            {
                !isOpen
                ?
                null:
                length > 0
                ?
                <StyledWrapper>
                    <StyledHeader>
                        <StyledTitle>{t('cartMenuTitle').replace(/<!--count-->/g, length)}</StyledTitle>
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
                            <Button text={t('createOrder')} matchParent={true}/>
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
