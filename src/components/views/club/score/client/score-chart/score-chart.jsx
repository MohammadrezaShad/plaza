import React, { Fragment, useContext, useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import Select from '../../../../../shared/form/select'


import {
    StyledContent,
    StyledHeader,
    StyledHeaderContent,
    StyledHeaderTitle,
    StyledChartGuide,
    StyledChartGuideIcon,
    StyledHeaderActions,
    StyledHeaderActionsItem,
    StyledRangeSlider
} from './score-chart.styled'
import { ThemeContext } from 'styled-components'
import Tooltip from '../../../../../shared/tooltip'
import Button from '../../../../../../components/shared/button'
import { buttonSizes, buttonVariants } from '../../../../../../constants/button-configs'
import RangeSlider from '../../../../../shared/range-slider'
import { rangeSliderStyles, rangeSliderTypes } from '../../../../../../constants/range-slider-configs'


const ScoreChart = () => {
    const [tooltipData, setTooltipData] = useState({})
    const [allChartDataset, setAllChartDataset] = useState({})
    const [monthyChartDataset, setMonthyChartDataset] = useState({})
    const [chartIsInit, setChartIsInit] = useState(false)  
    const [chartData, setChartData] = useState({})
    const themeContext = useContext(ThemeContext)
    const {t} = useTranslation();

    let gradient_monthly = null
    let width_monthly = null
    let height_monthly = null
    let gradient_all = null
    let width_all = null
    let height_all = null

    const defaultChartStyles = {
        borderCapStyle:'round',
        borderJoinStyle:'round',
        borderWidth:2,
        borderColor:themeContext.palette.subtitle,
        pointBackgroundColor:themeContext.palette.back,
        pointBorderWidth:2,
        borderColor: themeContext.palette.subtitle,
        pointHoverBorderWidth:2,
        pointRadius: 7,
        pointHoverRadius: 7,
    }
    const chartOptions = {
        legend: {
            display:false
        },
        tooltips: {
            enabled: false,
            custom: (tooltipModel) => {
                const data = {
                    top: Math.round(tooltipModel.caretY - 16) + 'px',
                    left: Math.round(tooltipModel.caretX) + 'px',
                    show: true
                }

                if (tooltipModel.body) {
                    const titleLines = tooltipModel.title || []
                    const bodyLines = tooltipModel.body.map(bodyItem => bodyItem.lines);
                    data.title = titleLines.join(',')
                    data.text = [bodyLines.join(','), bodyLines.join(',')]
                }

                if (tooltipModel.opacity === 0) {
                    data.show = false;
                    return;
                }

                setTooltipData(data)
            }
        },
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: parseInt(themeContext.dim[1]),
                bottom: parseInt(themeContext.dim[1])
            }
        },
        scales: {
            yAxes: [{
                gridLines: {
                    color: themeContext.palette.stroke,
                    borderDash:[5,4],
                    zeroLineColor: themeContext.palette.stroke
                },
                ticks: {
                    padding: parseInt(themeContext.dim[1]),
                    fontColor: themeContext.palette.subtitle,
                    fontStyle: 'normal',
                    fontSize: 12,
                    fontFamily:themeContext.defaults.fontName,
                    beginAtZero: true,
                    
                    //suggestedMax: 100
                },
                afterDataLimits(scale) {
                    scale.max += 1;
                }
            }],
            xAxes: [{
                gridLines: {
                    display:false
                },
                ticks: {
                    padding: parseInt(themeContext.dim[2]),
                    fontColor: themeContext.palette.onBack,
                    fontStyle: 'normal',
                    fontSize: 16,
                    fontFamily:themeContext.defaults.fontName
                }
            }]
        }
    }

    const periodOptions = [
        { value: '1', label: 'نمودار هفتگی' },
        { value: '2', label: 'نمودار ماهانه' },
    ]

    const showOptions = [
        { value: '', label: 'نمایش همه' },
        { value: '1', label: 'امتیاز کل' },
        { value: '2', label: 'امتیاز ماهانه' }
    ]

    const showChangeHandler = (selectedItem) => {
        setChartIsInit(false);

        let data = {...chartData}
        data.datasets = []

        if (selectedItem.value == 2 || !selectedItem.value) {
            data.datasets.push(monthyChartDataset)
        }

        if (selectedItem.value == 1 || !selectedItem.value) {
            data.datasets.push(allChartDataset)
        }

        
        setChartData(data)

    }

    const periodChangeHandler = (selectedItem) => {
        
    }

    const hideTooltipHandler = () => {
        setTooltipData({
            ...tooltipData,
            show: false
        })
    }

    

    useEffect(() => {

        const monthyData = {
            key: 2,
            label:'امتیاز ماهانه',
            backgroundColor: (context) => {
                const chartArea = context.chart.chartArea;
                const data = context.dataset.data;
                const chartMaxValue = context.chart.scales['y-axis-0'].max;
                const maxValue = Math.max(...data);
                if (!chartArea) {
                    return null;
                }

                const chartWidth = chartArea.right - chartArea.left
                const chartHeight = chartArea.bottom - chartArea.top
                const delta = Math.round(maxValue * chartHeight / chartMaxValue)
                let top = chartArea.top + (chartHeight - delta)
                top = Math.round(top - (chartHeight * 10 / 100))

                if (!chartIsInit || gradient_monthly === null || width_monthly !== chartWidth || height_monthly !== chartHeight) {
                    setChartIsInit(true)
                    width_monthly = chartWidth;
                    height_monthly = chartHeight;
                    
                    const ctx = context.chart.ctx;
                    gradient_monthly = ctx.createLinearGradient(0, top, 0, chartArea.bottom);
                    gradient_monthly.addColorStop(0, themeContext.palette.primary);
                    gradient_monthly.addColorStop(1, 'rgba(255, 255, 255, 0)');  
                }

                return gradient_monthly;
            },
            data: [5, 8, 12, 6, 7, 8, 16, 16, 15, 14],
            ...defaultChartStyles
        }

        const allData = {
            key:1,
            label:'امتیاز کل',
            backgroundColor:(context) => {
                const chartArea = context.chart.chartArea
                const data = context.dataset.data
                const chartMaxValue = context.chart.scales['y-axis-0'].max
                const maxValue = Math.max(...data)
                if (!chartArea) {
                    return null
                }

                const chartWidth = chartArea.right - chartArea.left
                const chartHeight = chartArea.bottom - chartArea.top
                const delta = Math.round(maxValue * chartHeight / chartMaxValue)
                let top = chartArea.top + (chartHeight - delta)
                top = Math.round(top - (chartHeight * 50 / 100))

                if (!chartIsInit || gradient_all === null || width_all !== chartWidth || height_all !== chartHeight) {
                    setChartIsInit(true)
                    width_all = chartWidth
                    height_all = chartHeight
                    const ctx = context.chart.ctx
                    gradient_all = ctx.createLinearGradient(0, top, 0, chartArea.bottom)
                    gradient_all.addColorStop(0, themeContext.palette.secondary)
                    gradient_all.addColorStop(1, 'rgba(255, 255, 255, 0)')
                    
                }

                return gradient_all
            },
            data: [10, 19, 20, 29, 30, 31, 32, 39, 41, 41.5],
            ...defaultChartStyles
        }
        

        const data = {
            labels: [
                'شهریور 98',
                'مهر 98',
                'آبان 98',
                'آذر 98',
                'دی 98',
                'اسفند 98',
                'فروردین 99',
                'اردیبهشت 99',
                'خرداد 99',
                'تیر 99'
            ],
            datasets: [
                monthyData,
                allData
            ]
        }

        setAllChartDataset(allData)
        setMonthyChartDataset(monthyData)
        setChartData(data)
    }, [])

					
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
            <StyledContent onMouseLeave={hideTooltipHandler}>
                <Line data={chartData} options={chartOptions} />
                <Tooltip 
                    above={true} 
                    top={tooltipData.top} 
                    left={tooltipData.left} 
                    title={tooltipData.title} text={tooltipData.text}
                    show={tooltipData.show || false}
                    minWidth="156px"
                    footer={<Button 
                                matchParent={true}
                                textWrap={false}
                                size={buttonSizes.SMALL}
                                variant={buttonVariants.OUTLINE}
                                text={t('details')} 
                                to="/"
                                />}
                    />
                {/* <StyledRangeSlider>
                    <RangeSlider style={rangeSliderStyles.RECTANGLE} />
                </StyledRangeSlider>
                <StyledRangeSlider>
                    <RangeSlider  />
                </StyledRangeSlider>
                <StyledRangeSlider>
                    <RangeSlider type={rangeSliderTypes.SINGLE} />
                </StyledRangeSlider> */}
            </StyledContent>
        </Fragment>
    )
}

ScoreChart.propTypes = {

}

export default ScoreChart
