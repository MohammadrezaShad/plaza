import React from 'react';
import { useDispatch } from 'react-redux'
// import QuickView from '../../../dialogs/product';
import Button from '../../../shared/button/button';
import ProductItem from '../../../shared/product/product-item';
import { add } from '../../../../redux/actions/cart-actions'

import {
    StyledWrapper,
    StyledSpecialWrap,
    StyledSpecialTitle,
    StyledSpecial,
    StyledSpecialItem,
    StyledItem
} from './home-view.styled';
import Paths from '../../../../utils/paths';
import StarRating from '../../../shared/star-rating';




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
            <StyledSpecialWrap>
                <StyledSpecialTitle>پیشنهادات ویژه</StyledSpecialTitle>
                <StyledSpecial>
                    <StyledItem>
                        <StyledSpecialItem title="Gallaxy A70" as={ProductItem} href={Paths.product.detail(100).getPath()} price={7500000} offPrice={7600000} imgSrc="/res/mobile/100.jpg">
                            <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
                                <Button
                                    text="افزودن به سبد خرید"
                                    onClick={() => addToBasketHandler(100, "Gallaxy A70", "/res/mobile/100.jpg", 7500000, "مشکی")}
                                />
                            </div>
                            <ul style={{ marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
                                <StarRating rate={4} />
                            </ul>
                        </StyledSpecialItem>
                    </StyledItem>
                    <StyledItem>
                        <StyledSpecialItem title="Gallaxy A50" as={ProductItem} href={Paths.product.detail(101).getPath()} price={6200000} offPrice={6500000} imgSrc="/res/mobile/101.jpg">
                            <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
                                <Button
                                    text="افزودن به سبد خرید"
                                    onClick={() => addToBasketHandler(101, "Gallaxy A50", "/res/mobile/101.jpg", 6200000, "سفید")}
                                />
                            </div>
                            <ul style={{ marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
                                <StarRating rate={4.5} />
                            </ul>
                        </StyledSpecialItem>
                    </StyledItem>
                    <StyledItem>
                        <StyledSpecialItem title="Gallaxy A30" as={ProductItem} href={Paths.product.detail(102).getPath()} price={5000000} offPrice={5200000} imgSrc="/res/mobile/102.jpg">
                            <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
                                <Button
                                    text="افزودن به سبد خرید"
                                    onClick={() => addToBasketHandler(102, "Gallaxy A30", "/res/mobile/102.jpg", 5000000, "سرمه ای")}
                                />
                            </div>
                            <ul style={{ marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
                                <StarRating rate={5} />
                            </ul>
                        </StyledSpecialItem>
                    </StyledItem>
                    <StyledItem>
                        <StyledSpecialItem title="Gallaxy A20" as={ProductItem} href={Paths.product.detail(103).getPath()} price={4300000} offPrice={4500000} imgSrc="/res/mobile/103.jpg">
                            <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
                                <Button
                                    text="افزودن به سبد خرید"
                                    onClick={() => addToBasketHandler(103, "Gallaxy A20", "/res/mobile/103.jpg", 5000000, "مشکی")}
                                />
                            </div>
                            <ul style={{ marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
                                <StarRating rate={3} />
                            </ul>
                        </StyledSpecialItem>
                    </StyledItem>
                </StyledSpecial>
            </StyledSpecialWrap>
            {/* <button onClick={() => { setModalIsShow(true) }}>show modal</button>
            <QuickView open={modalIsShow} onClose={modalCloseHandler} /> */}
        </StyledWrapper>
    )
}


export default HomeView;