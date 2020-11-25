import React, { useState } from 'react'
import PropTypes from 'prop-types'

import {
    StyledWrapper,
    StyledHead,
    StyledBottom,
    StyledContent,
    StyledTitle,
    StyledItemWrap
} from './color-palette.styled'
import Button from '../button'
import ColorPaletteItem from './color-palette-item'
import { buttonColors, buttonSizes, buttonVariants } from '../../../constants/button-configs'

const ColorPalette = props => {
    const [selectedColors, setSelectedColors] = useState([])
    const onClick = (id) => {
        let newSelectedColors = [...selectedColors, id]
        if (selectedColors.find((colorId) => colorId === id)) {
            newSelectedColors = newSelectedColors.filter((colorId) => colorId !== id)
        }
        setSelectedColors([...newSelectedColors])
    }
    const removeClickHandler = () => {
        setSelectedColors([])
    }
    return (
        <StyledWrapper>
            <StyledHead>
                <StyledTitle>انتخاب رنگ</StyledTitle>
                <Button
                    color={buttonColors.SECONDARY}
                    size={buttonSizes.SMALL}
                    variant={buttonVariants.LINK}
                    text="حذف رنگ ها"
                    onClick={removeClickHandler}
                />
            </StyledHead>
            <StyledContent>
                <StyledItemWrap>
                    <ColorPaletteItem
                        text="آبی"
                        selectedColors={selectedColors}
                        onClick={onClick}
                        id={1} />
                </StyledItemWrap>
                <StyledItemWrap>
                    <ColorPaletteItem
                        text="آبی"
                        selectedColors={selectedColors}
                        onClick={onClick} 
                        id={2}
                    />
                </StyledItemWrap>
                <StyledItemWrap>
                    <ColorPaletteItem
                        text="آبی"
                        onClick={onClick}
                        id={3}
                        selectedColors={selectedColors}
                    />
                </StyledItemWrap>
                <StyledItemWrap>
                    <ColorPaletteItem
                        text="آبی"
                        onClick={onClick}
                        selectedColors={selectedColors}
                        id={4} />
                </StyledItemWrap>
                <StyledItemWrap>
                    <ColorPaletteItem
                        text="آبی"
                        onClick={onClick}
                        selectedColors={selectedColors}
                        id={5} />
                </StyledItemWrap>
                <StyledItemWrap>
                    <ColorPaletteItem
                        text="آبی"
                        selectedColors={selectedColors}
                        onClick={onClick}
                        id={6} />
                </StyledItemWrap>
                <StyledItemWrap>
                    <ColorPaletteItem
                        text="آبی"
                        onClick={onClick}
                        selectedColors={selectedColors}
                        id={7} />
                </StyledItemWrap>
                <StyledItemWrap>
                    <ColorPaletteItem
                        text="آبی"
                        onClick={onClick}
                        selectedColors={selectedColors}
                        id={8} />
                </StyledItemWrap>
                <StyledItemWrap>
                    <ColorPaletteItem
                        selectedColors={selectedColors}
                        text="آبی" 
                        onClick={onClick} 
                        id={9} />
                </StyledItemWrap>
                <StyledItemWrap>
                    <ColorPaletteItem 
                    text="آبی" 
                    onClick={onClick} 
                    selectedColors={selectedColors}
                    id={10} />
                </StyledItemWrap>
                <StyledItemWrap>
                    <ColorPaletteItem 
                    text="آبی" 
                    onClick={onClick} 
                    id={11}
                    selectedColors={selectedColors}
                    />
                </StyledItemWrap>
                <StyledItemWrap>
                    <ColorPaletteItem 
                    text="آبی" 
                    onClick={onClick} 
                    selectedColors={selectedColors}
                    id={12} />
                </StyledItemWrap>
            </StyledContent>
            <StyledBottom>
                <StyledItemWrap>
                    <ColorPaletteItem 
                    text="آبی" 
                    onClick={onClick} 
                    selectedColors={selectedColors}
                    id={13} />
                </StyledItemWrap>
                <StyledItemWrap>
                    <ColorPaletteItem 
                    text="آبی" 
                    onClick={onClick} 
                    selectedColors={selectedColors}
                    id={14} />
                </StyledItemWrap>
            </StyledBottom>
        </StyledWrapper>
    )
}

ColorPalette.propTypes = {

}

export default ColorPalette
