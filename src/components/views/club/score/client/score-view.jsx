import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next';
import {
    StyledWrapper,
    StyledHeader,
    StyledHeaderContent,
    StyledHeaderTitle,
    StyledChartGuide,
    StyledChartGuideIcon,
    StyledHeaderActions
} from './score-view.styled'


const ScoreView = () => {
    const {t} = useTranslation();

    return (
        <StyledWrapper>
            <StyledHeader>
                <StyledHeaderContent>
                    <StyledHeaderTitle>{t('clubScoreView.title')}</StyledHeaderTitle>
                    <StyledChartGuide><StyledChartGuideIcon />{t('clubScoreView.monthlyScore')}</StyledChartGuide>
                    <StyledChartGuide><StyledChartGuideIcon $all={true} />{t('clubScoreView.totalScore')}</StyledChartGuide>
                </StyledHeaderContent>
                <StyledHeaderActions>
                    
                </StyledHeaderActions>
            </StyledHeader>
        </StyledWrapper>
    )
}

ScoreView.propTypes = {

}

export default ScoreView
