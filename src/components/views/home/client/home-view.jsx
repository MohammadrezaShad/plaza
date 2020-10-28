import React, { useState } from 'react';
import {useDispatch} from 'react-redux'
import QuickView from '../../../dialogs/product';
import Button from '../../../shared/button/button';
import Dialog from '../../../shared/dialog';
import ProductItem from '../../../shared/product/product-item';
import {add} from '../../../../redux/actions/cart-actions'

import {
    StyledWrapper,
    StyledSpecial,
    StyledSpecialItem
} from './home-view.styled';




const HomeView = () => {
    const dispatch = useDispatch()
    // const [modalIsShow, setModalIsShow] = useState(false);

    // const modalCloseHandler = () => {
    //     setModalIsShow(false);
    // }

    const addToBasketHandler = (id, title, photo, price, feature) => {
        dispatch(add(id, title, photo, price, feature))
    }

    return (
        <StyledWrapper>
            <StyledSpecial>
                <StyledSpecialItem title="Gallaxy A70" as={ProductItem} href="/" price={7500000} offPrice={7600000}>
                    <div style={{marginTop:'10px',display:'flex',justifyContent:'center'}}>
                        <Button 
                            text="افزودن به سبد خرید" 
                            onClick={() => addToBasketHandler(100, "Gallaxy A70", "/100.jpg", 7500000, "مشکی")}
                            />
                    </div>
                </StyledSpecialItem>
                <StyledSpecialItem title="Gallaxy A50" as={ProductItem} href="/" price={6200000} offPrice={6500000}>
                    <div style={{marginTop:'10px',display:'flex',justifyContent:'center'}}>
                        <Button 
                            text="افزودن به سبد خرید" 
                            onClick={() => addToBasketHandler(101, "Gallaxy A50", "/101.jpg", 6200000, "سفید")}
                            />
                    </div>
                </StyledSpecialItem>
            </StyledSpecial>
        </StyledWrapper>
    )
}


export default HomeView;