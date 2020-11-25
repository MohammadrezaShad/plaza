import React, { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import {
    StyledWrapper,
    StyledLayout,
    StyledIcon,
    StyledTooltip
} from './color-palette-item.styled'
import IconProvider from '../../../../providers/icon/icon-provider'
import Tooltip from '../../tooltip'

const ColorPaletteItem = ({ id, onClick, text,selectedColors }) => {
    const [checkedState, setCheckedState] = useState(false)
    const [showTooltip, setShowTooltip] = useState(false)
    const clickHandler = () => {
        onClick(id)
        setCheckedState(!checkedState)
    }

    const mouseEnterHandler = () => {
        setShowTooltip(true)
    }

    const mouseLeaveHandler = () => {
        setShowTooltip(false)

    }
    useEffect(() => {
        if(!selectedColors.length){
            setCheckedState(false)
        }
    }, [selectedColors])
    return (
        <Fragment>
            <StyledWrapper 
            id={id} 
            onClick={clickHandler} 
            checkedState={checkedState} 
            onMouseEnter={mouseEnterHandler} 
            onMouseLeave={mouseLeaveHandler}>
                {
                    checkedState ?
                        <StyledIcon as={IconProvider} icon="tick" size="16px" /> : null
                }
                <StyledTooltip >
                    <Tooltip show={showTooltip} left="50%" top="0" text={text} />
                </StyledTooltip>
            </StyledWrapper>
            {
                checkedState ?
                    <StyledLayout /> : null
            }
        </Fragment>
    )
}

ColorPaletteItem.propTypes = {

}

export default ColorPaletteItem
