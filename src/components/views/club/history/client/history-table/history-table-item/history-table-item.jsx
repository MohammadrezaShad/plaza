import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import {
    StyledWrapper,
    StyledContent,
    StyledLink,
    StyledScore,
    StyledTitle,
    StyledSubTitle,
    StyledStatus,
    StyledDate,
} from './history-table-item.styled'
import Button from '../../../../../../shared/button/button'
import { buttonColors, buttonSizes, buttonVariants } from '../../../../../../../constants/button-configs'
import BadgeButton from '../../../../../../shared/badge-button'

const HistoryTableItem = ({
    score,
    pointTitle,
    pointSubTitle,
    status,
    persuasivePoint,
    detail,
    href }) => {
    const { t } = useTranslation()
    return (
        <StyledWrapper>
            <StyledContent>
                <StyledScore score={score}>
                    {score >= 0 ? `+${score}` : score}
                </StyledScore>
            </StyledContent>
            <StyledContent>
                <StyledTitle>{pointTitle}</StyledTitle>
                <StyledSubTitle>{pointSubTitle}</StyledSubTitle>
            </StyledContent>
            <StyledContent>
                {persuasivePoint}
            </StyledContent>
            <StyledContent>
                <StyledStatus>
                    <StyledDate>{status.date}</StyledDate>
                    <BadgeButton status={status.confirm ? 'success':'check'}>
                        {status.confirm ? 'تایید امتیاز' : 'در حال بررسی'}
                    </BadgeButton>
                </StyledStatus>
            </StyledContent>
            <StyledContent>
                {
                    detail ?
                        <StyledLink to={href}>
                            <Button textWrap={true}  variant={buttonVariants.OUTLINE}>
                                {t('details')}
                            </Button>
                        </StyledLink> : ''
                }
            </StyledContent>
        </StyledWrapper>
    )
}

HistoryTableItem.propTypes = {
    score: PropTypes.number
}

export default HistoryTableItem
