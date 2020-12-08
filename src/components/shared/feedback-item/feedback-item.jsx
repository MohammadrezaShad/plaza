import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import {
    StyledHead,
    StyledIcon,
    StyledText,
    StyledTitle,
    StyledDescription,
    StlyedContent,
    StyledDate,
    StyledButton,
    StyledIconWrap
} from './feedback-item.styled'
import IconProvider from '../../../providers/icon/icon-provider'
import BadgeButton from '../badge-button'
import { badgeButtonVariants } from '../../../constants/badge-button-config'

const FeedbackItem = ({ name, date, recommendetion, title, mobile }) => {
    const { t } = useTranslation()
    return (
        <Fragment>
            <StyledHead>
                <StyledIconWrap>
                    <StyledIcon as={IconProvider} icon="user" size="20px" />
                </StyledIconWrap>
                <StlyedContent>
                    <StyledText>{name}&nbsp;.&nbsp;</StyledText>
                    <StyledDate>{date}</StyledDate>
                </StlyedContent>
                {
                    mobile ? null :
                        <StyledButton>
                            <BadgeButton
                                status={recommendetion ? badgeButtonVariants.SUCCESS : badgeButtonVariants.ERROR}
                                text={recommendetion ? t("brandsView.buyRecommend") : t("brandsView.buyNotRecommend")}
                            />
                        </StyledButton>
                }

            </StyledHead>
            <StyledTitle>{title}</StyledTitle>
            {
                !mobile ? null :
                    <StyledButton mobile={mobile}>
                        <BadgeButton
                            status={recommendetion ? badgeButtonVariants.SUCCESS : badgeButtonVariants.ERROR}
                            text={recommendetion ? t("brandsView.buyRecommend") : t("brandsView.buyNotRecommend")}
                        />
                    </StyledButton>
            }
            <StyledDescription>
                لورم ایپسوم یا طرح‌نما به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند
            </StyledDescription>
        </Fragment>
    )
}

FeedbackItem.propTypes = {
    name: PropTypes.string,
    date: PropTypes.string,
    recommendetion: PropTypes.bool,
    title: PropTypes.string,
    mobile: PropTypes.bool,
    description: PropTypes.string
}

export default FeedbackItem
