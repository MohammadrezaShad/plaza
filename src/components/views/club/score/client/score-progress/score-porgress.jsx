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
    StyledTooltipContent,
    StyledIcon
} from './score-progress.styled'
import IconProvider from '../../../../../../providers/icon/icon-provider'
import Tooltip from '../../../../../shared/tooltip'

const ScorePorgress = ({ point = 2410, maxPoint = 50000, level = 4 }) => {
    const { t } = useTranslation()
    return (
        <StyledWrapper>
            <StyledTitle>
                {t("plazaClubArea.increaseLevelBar")}
            </StyledTitle>
            <StyledProgress level={level} progress={point / maxPoint}>
                <StyledProgressGreenLevel>
                    <StyledNumber>
                        {t("plazaClubArea.greenLevel").toLocaleString()}
                    </StyledNumber>
                </StyledProgressGreenLevel>
                <StyledProgressSilverLevel level={level}>
                    <StyledNumber>
                        {
                            level === 1 ?
                                t("plazaClubArea.silverLevel").toLocaleString() : ''
                        }
                    </StyledNumber>
                    <StyledLevel>
                        {
                            level === 1 ?
                                t("plazaClubArea.increaseSilverLevelBar") : ''
                        }
                    </StyledLevel>
                </StyledProgressSilverLevel>
                <StyledProgressGoldLevel level={level} >
                    <StyledNumber>
                        {
                            level === 1 || level === 2 ?
                                t("plazaClubArea.goldLevel").toLocaleString() : ''
                        }
                    </StyledNumber>
                    <StyledLevel>
                        {
                            level === 2 ?
                                t("plazaClubArea.increaseGoldenLevelBar") :
                                level === 1 ?
                                    t("plazaClubArea.increaseGoldLevelBar") : ''
                        }
                    </StyledLevel>
                </StyledProgressGoldLevel>
                <StyledProgressDiamondLevel>
                    <StyledNumber>
                        {t("plazaClubArea.diamondLevel").toLocaleString()}
                    </StyledNumber>
                    <StyledLevel>
                        <StyledIcon as={IconProvider} icon="diamond" size="16px" />
                        {
                            level === 3 ?
                                t("plazaClubArea.increaseDiamondLevelBar").toLocaleString() :
                                level === 4 ?
                                    t("plazaClubArea.stayDiamondLevelBar").toLocaleString() : ''
                        }
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
    maxPoint: PropTypes.number,
    level:PropTypes.number
}

export default ScorePorgress
