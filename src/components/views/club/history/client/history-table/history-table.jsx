import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import {
    StyledWrapper,
    StyledContainer,
    StyledEmpty,
    StyledTitle,
    StyledScore,
    StyledPointTitle,
    StyledPointSubTitle,
    StyledDetail,
    StyledContent,
    StyledPersuasivePoint,
    StyledDate,
    StyledLink,
    StyleBadgedLink
} from './history-table.styled'
import Pagination from '../../../../../shared/pagination'
import Paths from '../../../../../../utils/paths'
import HistoryEmpty from './history-empty'
import Table from '../../../../../shared/table'
import BadgeButton from '../../../../../shared/badge-button'
import { badgeButtonVariants } from '../../../../../../constants/badge-button-config'
import Button from '../../../../../shared/button'
import { buttonVariants } from '../../../../../../constants/button-configs'

const data = [
    { score: 1000, pointTitle: "دعوت دوستان", pointSubTitle: "ahmad.n33@gmail.com", persuasivePoint: "ندارد", status: { confirm: 1, date: "‏1 فروردین 1399" }, href: Paths.home.getPath(), detail: false },
    { score: 1000, pointTitle: "دعوت دوستان", pointSubTitle: "ahmad.n33@gmail.com", persuasivePoint: "ندارد", status: { confirm: 3, date: "‏1 فروردین 1399" }, href: Paths.home.getPath(), detail: true },
]

const HistoryTable = () => {
    const { t } = useTranslation()
    return (
        <StyledWrapper>

            <StyledTitle>{t('plazaClubArea.historyOfPointGraph')}</StyledTitle>
            <Table
                headerConfig={[
                    { title: t('score') },
                    { title: t('pointTitle') },
                    { title: t('persuasivePoint') },
                    { title: t('status') },
                    { title: t('blank') }
                ]}

                rowConfig={
                    data.map(({ score, pointTitle, pointSubTitle, persuasivePoint, status, href, detail }) => {
                        return {
                            score:
                                <StyledScore score={score}>{score >= 0 ? `+${score}` : score}</StyledScore>,
                            pointTitle:
                                <StyledContent>
                                    <StyledPointTitle>{pointTitle}</StyledPointTitle>
                                    <StyledPointSubTitle>{pointSubTitle}</StyledPointSubTitle>
                                </StyledContent>,
                            persuasivePoint:
                                <StyledPersuasivePoint>{persuasivePoint}</StyledPersuasivePoint>,
                            status:
                                <StyledDetail>
                                    <StyledDate>{status.date}</StyledDate>
                                    <StyledLink to={href}>
                                        <BadgeButton
                                            status={status.confirm === badgeButtonVariants.SUCCESS ?
                                                badgeButtonVariants.SUCCESS : status.confirm === badgeButtonVariants.ERROR
                                                    ? badgeButtonVariants.ERROR : badgeButtonVariants.CHECK}
                                        >
                                            {status.confirm === badgeButtonVariants.SUCCESS ?
                                                t('plazaClubArea.confirmPoints') :
                                                status.confirm === badgeButtonVariants.ERROR ?
                                                    t('plazaClubArea.reject') : t('pending')}
                                        </BadgeButton>
                                    </StyledLink>
                                </StyledDetail>,
                            detail:
                                detail ?
                                    <StyleBadgedLink to={href}>
                                        <Button textWrap={true} variant={buttonVariants.OUTLINE}>
                                            {t('details')}
                                        </Button>
                                    </StyleBadgedLink> : ''
                        }
                    })
                }
            />
            <StyledContainer>
                <Pagination />
            </StyledContainer>
            <StyledEmpty>
                <HistoryEmpty />
            </StyledEmpty>
        </StyledWrapper>
    )
}

HistoryTable.propTypes = {

}

export default HistoryTable
