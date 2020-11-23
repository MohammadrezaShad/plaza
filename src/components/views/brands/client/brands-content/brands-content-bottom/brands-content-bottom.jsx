import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { StyledWrapper, StyledItem, StlyedText } from './brands-content-bottom.styled'
import Product from '../../../../../shared/product'
import { ReactComponent as ProductIcon } from '../../../../../../assets/res/client/prod.svg';
import SubProductSlider from '../../../../../shared/sub-product-slider';

const items = [{ title: "محافظ برق و چند راهی", id: 2 }, { title: "موس", id: 3 }, { title: "کیبورد", id: 4 }, { title: "کابل اندرویدی", id: 5 }, { title: "محافظ برق و چند راهی", id: 6 }, { title: "موس", id: 7 }, { title: "کیبورد", id: 8 }, { title: "کابل اندرویدی", id: 9 }, { title: "محافظ برق و چند راهی", id: 10 }, { title: "موس", id: 11 }, { title: "کیبورد", id: 12 }, { title: "کابل اندرویدی", id: 13 }, { title: "محافظ برق و چند راهی", id: 14 }, { title: "موس", id: 15 }, { title: "کیبورد", id: 16 }, { title: "کابل اندرویدی", id: 17 }, { title: "محافظ برق و چند راهی", id: 18 }, { title: "موس", id: 20 }, { title: "کیبورد", id: 19 }]

const BrandsContentBottom = props => {
    return (
        <StyledWrapper>
            <SubProductSlider title="کالاهای هویت" items={items} />
        </StyledWrapper>
    )
}

BrandsContentBottom.propTypes = {

}

export default BrandsContentBottom
