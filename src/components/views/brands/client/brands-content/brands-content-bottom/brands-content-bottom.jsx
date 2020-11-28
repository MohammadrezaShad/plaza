import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import {
    StyledWrapper,
    StyledItem,
    StlyedText,
    StyledDescription,
    StyledDescriptionTitle,
    StyledDescriptionText
} from './brands-content-bottom.styled'
import Product from '../../../../../shared/product'
import { ReactComponent as ProductIcon } from '../../../../../../assets/res/client/prod.svg';
import SubProductSlider from '../../../../../shared/sub-product-slider';

const items = [{ title: "محافظ برق و چند راهی", id: 2 }, { title: "موس", id: 3 }, { title: "کیبورد", id: 4 }, { title: "کابل اندرویدی", id: 5 }, { title: "محافظ برق و چند راهی", id: 6 }, { title: "موس", id: 7 }, { title: "کیبورد", id: 8 }, { title: "کابل اندرویدی", id: 9 }, { title: "محافظ برق و چند راهی", id: 10 }, { title: "موس", id: 11 }, { title: "کیبورد", id: 12 }, { title: "کابل اندرویدی", id: 13 }, { title: "محافظ برق و چند راهی", id: 14 }, { title: "موس", id: 15 }, { title: "کیبورد", id: 16 }, { title: "کابل اندرویدی", id: 17 }, { title: "محافظ برق و چند راهی", id: 18 }, { title: "موس", id: 20 }, { title: "کیبورد", id: 19 }]

const BrandsContentBottom = props => {
    return (
        <Fragment>
            <StyledWrapper>
                <SubProductSlider title="کالاهای هویت" items={items} />
            </StyledWrapper>
            <StyledDescription>
                <StyledDescriptionTitle>برند هویت</StyledDescriptionTitle>
                <StyledDescriptionText>
                    هویت؛ یک برند قدرتمند چینی
                   <br />
                کمپانی هویت (Havit) سال 1998 در گوانجو چین با هدف تولید تجهیزات الکترونیکی و کامپیوتری راه اندازی شد. در سال 2001 هویت برای اولین بار خط تولید خود را راه انداخت و محصولاتی به صورت محدود تولید و به بازار چین عرضه کرد. به مرور در سال های بعد با جا انداختن برند هویت در میان کاربران، هویت توانست به یکی از بزرگترین تولیدکنندگان لوازم جانبی دیجیتال در دنیا تبدیل شود. در سال 2017 میلادی محصولات برند هویت به سراسر دنیا صادر شد.

                    <br />
                    هویت (Havit) بخشی از تمرکز خود را روی تولید در دو حوزه گیمینگ و محصولات حرفه ای گذاشته است. محصولات گیمینگ هویت شامل هدست، ماوس و کیبورد گیمینگ می شود. از سوی دیگر، محصولات سری H مخصوص آن دسته از کاربرانی است که کیفیت برای آن ها اهمیت دارد. هدست، اسپیکر و هندزفری های سری H هویت برای ورزشکاران بسیار مناسب است.
                    <br />
                    این کمپانی بخش تولید خود را گسترش داد و لوازم جانبی موبایل را به لیست محصولاتش افزود. هویت با توسعه بخش مهندسی و بازاریابی، محصولات با قابلیت های عالی و طراحی های خاص تولید نمود و برند خود را در بازارهای جهانی معروف کرد. این کمپانی در بخش لوازم جانبی موبایل، حضور جدی تری دارد و هدفون،اسپیکر، کابل، شارژر ، دستگاه های بی سیم ، هوشمند و ... از محصولات متنوع آن است
                </StyledDescriptionText>
            </StyledDescription>
        </Fragment>
    )
}

BrandsContentBottom.propTypes = {

}

export default BrandsContentBottom
