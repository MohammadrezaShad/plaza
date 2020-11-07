import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import MoneyGraphic from '../../../../../../assets/images/club/moneyGraphic.png'
import {
    StyledContent,
    StyledWrapper,
    StyledContainer,
    StyledImg,
    StyledImgWrap,
    StyledTitle,
    StyledText,
    StyledDetail
} from './score-ways.styled'
import ScoreWaysItem from './score-ways-item'

const ScoreWays = props => {
    return (
        <StyledWrapper>
            <StyledContainer>
                <StyledImgWrap>
                    <StyledImg src={MoneyGraphic} />
                </StyledImgWrap>
            </StyledContainer>
            <StyledContent>
              <StyledTitle>
              راه های کسب امتیاز
              </StyledTitle>
              <StyledText>
              ما راه های مختلفی را برایتان فراهم کرده ایم تا بتوانید امتیازهای خود را افزایش دهید
              </StyledText>
              <StyledDetail>
                <ScoreWaysItem text="امتیاز" score={1000} title="تکمیل پروفایل" icon="profile" />
                <ScoreWaysItem text="امتیاز به نسبت قیمت کالا محاسبه می‌شود" title="خرید کالا" icon="buy" />
                <ScoreWaysItem text="امتیاز" score={50} title="ثبت نظر" icon="comment-o" />
              </StyledDetail>
              <StyledDetail>
              <ScoreWaysItem text="امتیاز" score={500} title="دعوت دوستان" icon="friends-o" />
                <ScoreWaysItem text="امتیاز" score={250} title="نقد و بررسی کالای خریداری شده" icon="review" />
                <ScoreWaysItem text="امتیاز" score={1} title="نظرات کاربران" icon="like-comment" />
              </StyledDetail>
            </StyledContent>
        </StyledWrapper>
    )
}

ScoreWays.propTypes = {

}

export default ScoreWays
