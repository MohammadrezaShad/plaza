import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import {
    StyledWrapper,
    StyledProgress,
    StyledTitle,
    StyledLevel,
    StyledNumber,
    StyledProgressGreenLevel,
    StyledProgressSilverLevel,
    StyledProgressGoldLevel,
    StyledProgressDiamondLevel,
    StyledTooltipContent
} from './score-progress.styled'
import IconProvider from '../../../../../../providers/icon/icon-provider'
import Tooltip from '../../../../../shared/tooltip'

const ScorePorgress = ({ point = 2410, maxPoint = 25000 }) => {
    const { t } = useTranslation()
    return (
        <StyledWrapper>
            <StyledTitle>
                {t("plazaClubArea.increaseLevelBar")}
            </StyledTitle>
            <StyledProgress progress={point / maxPoint}>
                <StyledProgressGreenLevel>
                    <StyledNumber>
                        {t("plazaClubArea.greenLevel").toLocaleString()}
                    </StyledNumber>
                </StyledProgressGreenLevel>
                <StyledProgressSilverLevel>
                    <StyledNumber>
                        {t("plazaClubArea.silverLevel").toLocaleString()}
                    </StyledNumber>
                    <StyledLevel>
                        {t("plazaClubArea.increaseSilverLevelBar")}
                    </StyledLevel>
                </StyledProgressSilverLevel>
                <StyledProgressGoldLevel>
                    <StyledNumber>
                        {t("plazaClubArea.goldLevel").toLocaleString()}
                    </StyledNumber>
                    <StyledLevel>
                        {t("plazaClubArea.increaseGoldLevelBar")}
                    </StyledLevel>
                </StyledProgressGoldLevel>
                <StyledProgressDiamondLevel>
                    <StyledNumber>
                        {t("plazaClubArea.diamondLevel").toLocaleString()}
                    </StyledNumber>
                    <StyledLevel>
                        <IconProvider icon="diamond" size="16px" />
                    </StyledLevel>
                </StyledProgressDiamondLevel>
                <Tooltip top="-45px" left={`${(point / maxPoint) * 100}%`} >
                    <StyledTooltipContent>
                        {point.toLocaleString()}
                    </StyledTooltipContent>
                </Tooltip>
            </StyledProgress>
        </StyledWrapper>
    )
}

ScorePorgress.propTypes = {
    point: PropTypes.number,
    maxPoint: PropTypes.number
}

export default ScorePorgress
