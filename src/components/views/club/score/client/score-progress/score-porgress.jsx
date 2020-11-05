import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import {
    StyledWrapper,
    StyledProgress,
    StyledTitle,
    StyledLevel,
    StyledNumber,
    StyledTooltipNumber,
    StyledProgressGreenLevel,
    StyledProgressSilverLevel,
    StyledProgressGoldLevel,
    StyledProgressDiamondLevel,
    StyledTooltip
} from './score-progress.styled'
import IconProvider from '../../../../../../providers/icon/icon-provider'

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
                <StyledTooltip progress={point / maxPoint}>
                    <StyledTooltipNumber>
                        {point.toLocaleString()}
                    </StyledTooltipNumber>
                </StyledTooltip>
            </StyledProgress>
        </StyledWrapper>
    )
}

ScorePorgress.propTypes = {
    point: PropTypes.number,
    maxPoint: PropTypes.number
}

export default ScorePorgress
