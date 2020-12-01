import React from 'react'
import PropTypes from 'prop-types'

import { StyledWrapper, StyledBlock, StyledBottomWrap, StyledContent } from './brands-view.styled'
import BrandsPreview from '../../../shared/brands-preview'
import BrandsContentBottom from './brands-content-bottom'
import BrandsContentMain from './brands-content-main/brands-content-main'

const items = [{ title: "محافظ برق و چند راهی", id: 2 }, { title: "موس", id: 3 }, { title: "کیبورد", id: 4 }, { title: "کابل اندرویدی", id: 5 }, { title: "محافظ برق و چند راهی", id: 6 }, { title: "موس", id: 7 }, { title: "کیبورد", id: 8 }, { title: "کابل اندرویدی", id: 9 }, { title: "محافظ برق و چند راهی", id: 10 }, { title: "موس", id: 11 }, { title: "کیبورد", id: 12 }, { title: "کابل اندرویدی", id: 13 }, { title: "محافظ برق و چند راهی", id: 14 }, { title: "موس", id: 15 }, { title: "کیبورد", id: 16 }, { title: "کابل اندرویدی", id: 17 }, { title: "محافظ برق و چند راهی", id: 18 }, { title: "موس", id: 20 }, { title: "کیبورد", id: 19 }]

const BrandsView = props => {
    return (
        <StyledWrapper>
            <StyledBlock>
                <BrandsPreview />
            </StyledBlock>
            <StyledContent>
                <BrandsContentMain />
            </StyledContent>
            <StyledBottomWrap>
                <BrandsContentBottom />
            </StyledBottomWrap>
        </StyledWrapper>
    )
}

BrandsView.propTypes = {

}

export default BrandsView
