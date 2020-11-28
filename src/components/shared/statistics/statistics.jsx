import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import { StyledWrapper, StyledBlock } from './statistics.styled'
import StatisticsItem from './statistics-item'

const Statistics = props => {
    const {t}=useTranslation()
    return (
        <StyledWrapper>
            <StyledBlock>
                <StatisticsItem title="طراحی ظاهری" point={8} max={10} />
            </StyledBlock>
            <StyledBlock>
                <StatisticsItem title="امکانات و ویژگی ها" point={5} max={10} />
            </StyledBlock>
            <StyledBlock>
                <StatisticsItem title="عملکرد" point={1} max={10} />
            </StyledBlock>
            <StyledBlock>
                <StatisticsItem title="کیفیت صدا" point={3} max={10} />
            </StyledBlock>
            <StyledBlock>
                <StatisticsItem title="شارژدهی و دوام باتری" point={10} max={10} />
            </StyledBlock>
            <StyledBlock>
                <StatisticsItem title="ارزش خرید در برابر قیمت" point={10} max={10} />
            </StyledBlock>
        </StyledWrapper>
    )
}

Statistics.propTypes = {

}

export default Statistics
