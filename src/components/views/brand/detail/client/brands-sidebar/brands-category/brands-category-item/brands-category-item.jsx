import React from 'react'
import PropTypes from 'prop-types'

import {
    StyledWrap,
} from './brands-category-item.styled'
import Checkbox from '../../../../../../../shared/form/checkbox'


const BrandsCategoryItem = ({ id, title, onChange }) => {

    return (

        <StyledWrap key={id}>
            <Checkbox text={title} onChange={(e) => onChange(id, e)} />
        </StyledWrap>
    )
}

BrandsCategoryItem.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    onChange: PropTypes.func
}

export default BrandsCategoryItem
