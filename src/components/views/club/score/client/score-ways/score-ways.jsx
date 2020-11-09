import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import MoneyGraphic from '../../../../../../assets/images/club/moneyGraphic.png'
import {
  StyledContent,
  StyledWrapper,
  StyledContainer,
  StyledImg,
  StyledImgWrap,
  StyledTitle,
  StyledText,
  StyledDetail,

  StyledButtonWrap,
  StyledItem,
  StyledTooltipWrap
} from './score-ways.styled'
import ScoreWaysItem from './score-ways-item'
import Tooltip from '../../../../../shared/tooltip'
import Button from '../../../../../shared/button'
import { buttonSizes, buttonVariants } from '../../../../../../constants/button-configs'

const ScoreWays = props => {
  const { t } = useTranslation()

  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledImgWrap>
          <StyledImg src={MoneyGraphic} />
        </StyledImgWrap>
      </StyledContainer>
      <StyledContent>
        {/* <Tooltip title="خرداد 99" left={300} >
          <StyledTooltipWrap>
            <StyledItem>{t('clubScoreView.monthScore',{count:360})}</StyledItem>
            <StyledItem>{t('clubScoreView.numberOfPurchase',{count:2})}</StyledItem>
            <StyledButtonWrap>
            <Button matchParent={true}
              textWrap={false}
              size={buttonSizes.SMALL}
              variant={buttonVariants.OUTLINE}
              text={t('details')} />
            </StyledButtonWrap>
          </StyledTooltipWrap>
        </Tooltip> */}
        <StyledTitle>{t("clubScoreView.earnScoreTips")}</StyledTitle>
        <StyledText>{t("clubScoreView.scoreGuide")}</StyledText>
        <StyledDetail>
          <ScoreWaysItem text={t("score")} score={t("clubScoreView.completeProfileScore")} title={t("clubScoreView.completeProfile")} icon="profile" />
          <ScoreWaysItem text={t("clubScoreView.shoppingScore")} title={t("clubScoreView.shopping")} icon="buy" />
          <ScoreWaysItem text={t("score")} score={t("clubScoreView.commentScore")} title={t("clubScoreView.comment")} icon="comment-o" />
        </StyledDetail>
        <StyledDetail>
          <ScoreWaysItem text={t("score")} score={t("clubScoreView.inviteFiendsScore")} title={t("clubScoreView.inviteFriends")} icon="friends-o" />
          <ScoreWaysItem marginBottom={1} text={t("score")} score={t("clubScoreView.reviewScore")} title={t("clubScoreView.review")} icon="review" />
          <ScoreWaysItem marginBottom={1} text={t("score")} score={t("clubScoreView.likeCommentsScore")} title={t("clubScoreView.likeComments")} icon="like-comment" />
        </StyledDetail>
      </StyledContent>
    </StyledWrapper>
  )
}

ScoreWays.propTypes = {

}

export default ScoreWays
