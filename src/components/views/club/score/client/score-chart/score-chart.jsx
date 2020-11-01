import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Select from '../../../../../shared/form/select'

import {
    StyledContent,
    StyledHeader,
    StyledHeaderContent,
    StyledHeaderTitle,
    StyledChartGuide,
    StyledChartGuideIcon,
    StyledHeaderActions,
    StyledHeaderActionsItem
} from './score-chart.styled'
import { useTranslation } from 'react-i18next';

const ScoreChart = () => {
    const {t} = useTranslation();

    const periodOptions = [
        { value: '1', label: 'نمودار هفتگی' },
        { value: '2', label: 'نمودار ماهانه' },
    ]

    const showOptions = [
        { value: '1', label: 'نمایش همه' },
        { value: '2', label: 'امتیاز کل' },
        { value: '3', label: 'امتیاز ماهانه' }
    ]

    const showChangeHandler = (selectedItem) => {
        
    }

    const periodChangeHandler = (selectedItem) => {
        
    }

    return (
        <Fragment>
            <StyledHeader>
                <StyledHeaderContent>
                    <StyledHeaderTitle>{t('clubScoreView.title')}</StyledHeaderTitle>
                    <StyledChartGuide><StyledChartGuideIcon />{t('clubScoreView.monthlyScore')}</StyledChartGuide>
                    <StyledChartGuide><StyledChartGuideIcon $all={true} />{t('clubScoreView.totalScore')}</StyledChartGuide>
                </StyledHeaderContent>
                <StyledHeaderActions>
                    <StyledHeaderActionsItem>
                        <Select options={showOptions} value={showOptions[0]} onChange={showChangeHandler}/>
                    </StyledHeaderActionsItem>
                    <StyledHeaderActionsItem>
                        <Select options={periodOptions} value={periodOptions[1]} onChange={periodChangeHandler}/>
                    </StyledHeaderActionsItem>
                </StyledHeaderActions>
            </StyledHeader>
            <StyledContent>
                <div style={{height:'200px',backgroundColor:'#f5f5f5'}}>chart</div>
            </StyledContent>
        </Fragment>
    )
}

ScoreChart.propTypes = {

}

export default ScoreChart
