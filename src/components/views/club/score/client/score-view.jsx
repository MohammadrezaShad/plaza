import React from 'react'
import { useTranslation } from 'react-i18next'
import ScoreChart from './score-chart'
import ScorePorgress from './score-progress'
import ScoreWays from './score-ways'

import {
    StyledWrapper,
    StyledBlock
} from './score-view.styled'

const ScoreView = () => {
    const {t} = useTranslation();

    return (
        <StyledWrapper>
            <StyledBlock>
                <ScoreChart/>
            </StyledBlock>
            <StyledBlock>
                <ScorePorgress/>
            </StyledBlock>
            <StyledBlock>
                <ScoreWays/>
            </StyledBlock>
        </StyledWrapper>
    )
}

export default ScoreView
