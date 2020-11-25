import React from 'react'
import PropTypes from 'prop-types'

import {
    StyledWrapper,
    StyledImgWrap,
    StyledImgContainer,
    StyledImg,
    StyledContent,
    StyledHead,
    StyledTitle,
    StyledDetail,
    StyledText,
    StyledBottom,
    StyledButton,
    StyledLink,
    StyledTextWrap,
    StyledColor,
    StyledButtonWrap,
    StyledTextBold,
    StyledContainer,
    StyledIcon
} from './cart-item.styled'
import IconProvider from '../../../providers/icon/icon-provider'
import CardImg from '../../../assets/res/client/img.png'
import Paths from '../../../utils/paths'
import Button from '../button'
import { buttonColors, buttonSizes, buttonVariants } from '../../../constants/button-configs'
import { Trans, useTranslation } from 'react-i18next'

const CartItem = ({ id = 1, onDelete,count=5000000,total=5000000}) => {
    const { t } = useTranslation()
    // const dispatch = useDispatch()

    // const removeHandler = (id) => {
    //     dispatch(remove(id))
    // }

    const removeHandler = (e) => {
        onDelete && onDelete(id);
    }

    const changeColorHandler = () => {

    }

    return (
        <StyledWrapper>
            <StyledImgWrap>
                <StyledImgContainer>
                    <StyledImg src={CardImg} />
                </StyledImgContainer>
            </StyledImgWrap>
            <StyledContent>
                <StyledHead>
                    <StyledTitle>دسته بازی بی سیم تسکو مدل TG 134W</StyledTitle>
                    <StyledButton onClick={removeHandler}>
                        <IconProvider icon="delete-o" size="20px" />
                    </StyledButton>
                </StyledHead>
                <StyledDetail>
                    <StyledTextWrap>
                        <StyledText>
                             {t("brand")} :&nbsp;
                        </StyledText>
                        <StyledLink to={Paths.home.getPath()}>
                            هویت
                        </StyledLink>
                    </StyledTextWrap>
                    <StyledTextWrap>
                        <StyledText>{t("brandsView.guarantee")} : اصالت و سلامت فیزیکی</StyledText>
                    </StyledTextWrap>
                    <StyledTextWrap>
                        <StyledColor />
                        <StyledText>مشکی</StyledText>
                        <StyledButtonWrap>
                            <Button
                                variant={buttonVariants.LINK}
                                size={buttonSizes.SMALL}
                                color={buttonColors.SECONDARY}
                                text={t("changeColor")}
                                onClick={changeColorHandler}
                            />
                        </StyledButtonWrap>
                    </StyledTextWrap>
                </StyledDetail>
                <StyledBottom>
                    <StyledContainer>
                        <StyledText>
                        {t("amount")}
                        </StyledText>

                        <StyledButtonWrap>
                            <Button
                                variant={buttonVariants.OUTLINE}
                                size={buttonSizes.SMALL}
                            >
                                <StyledIcon as={IconProvider} icon="about" size="8px" />
                            </Button>
                        </StyledButtonWrap>
                        <StyledText>
                            1
                        </StyledText>
                        <StyledButtonWrap>
                            <Button
                                variant={buttonVariants.OUTLINE}
                                size={buttonSizes.SMALL}
                            >
                                <StyledIcon as={IconProvider} icon="about" size="8px" />
                            </Button>
                        </StyledButtonWrap>
                    </StyledContainer>
                    <StyledText>
                        <Trans i18nKey="brandsView.unitPrice" values={{ count: count.toLocaleString() }} />
                    </StyledText>
                    <StyledTextBold>
                        <Trans i18nKey="brandsView.totalPrice" values={{ total: total.toLocaleString() }} />
                    </StyledTextBold>
                </StyledBottom>
            </StyledContent>
        </StyledWrapper>
    )
}

CartItem.propTypes = {
 id:PropTypes.number,
 count:PropTypes.number,
 total:PropTypes.number,
 onDelete:PropTypes.func
}

export default CartItem
