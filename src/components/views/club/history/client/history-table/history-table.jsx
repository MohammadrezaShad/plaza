import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import { StyledWrapper, StyledContent, StyledContainer, StyledTable, StyledEmpty, StyledTitle } from './history-table.styled'
import HistoryTableHead from './history-table-head'
import HistoryTableItem from './history-table-item'
import Pagination from '../../../../../shared/pagination'
import Paths from '../../../../../../utils/paths'
import HistoryEmpty from './history-empty'



const HistoryTable = props => {
    const { t } = useTranslation()
    return (
        <StyledWrapper>
            <StyledTitle>{t('plazaClubArea.historyOfPointGraph')}</StyledTitle>
            <StyledEmpty>
                <HistoryEmpty />
            </StyledEmpty>
            <StyledTable>
                <HistoryTableHead
                    items={
                        [t('score'),
                        t('pointTitle'),
                        t('persuasivePoint'),
                        t('status'),
                        t('blank')]
                    } />
                <StyledContent>
                    <HistoryTableItem
                        score={1000}
                        pointTitle="دعوت دوستان"
                        pointSubTitle="ahmad.n33@gmail.com"
                        status={{ confirm: true, date: "‏1 فروردین 1399" }}
                        persuasivePoint="ندارد"
                        detail={true}
                        href={Paths.home.getRoute()} />
                    <HistoryTableItem
                        score={-1000}
                        pointTitle="دعوت دوستان"
                        pointSubTitle="ahmad.n33@gmail.com"
                        status={{ confirm: false, date: "‏1 فروردین 1399" }}
                        persuasivePoint="ندارد"
                        detail={true}
                        href={Paths.home.getRoute()} />
                </StyledContent>
                <StyledContainer>
                    <Pagination />
                </StyledContainer>
            </StyledTable>
            <StyledEmpty>

            </StyledEmpty>
        </StyledWrapper>
    )
}

HistoryTable.propTypes = {

}

export default HistoryTable
