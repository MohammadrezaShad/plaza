import styled from 'styled-components'
import { rangeSliderStyles } from '../../../constants/range-slider-configs'

export const StyledProgress = styled.span`
    position:absolute;
    top:0;
    right:10%;
    bottom:0;
    left:0;
`

export const StyledWrapper = styled.div`
    position:relative;
    height:${({$style}) => $style == rangeSliderStyles.CIRCLE ? '5px' : '4px'};
    background-color:${({theme}) => theme.palette.surface};
    border-radius:${({$style}) => $style == rangeSliderStyles.CIRCLE ? '5px' : null};

    ${StyledProgress}{
        background-color:${({theme, $style}) => $style == rangeSliderStyles.CIRCLE ? theme.palette.secondary : theme.palette.stroke};
        border-radius:${({$style}) => $style == rangeSliderStyles.CIRCLE ? '5px' : null};
    }
`


