import React from 'react'
import PropTypes from 'prop-types'

import { 
    StyledWrapper, 
    StyledIconWrap, 
    StyledIcon, 
    StyledTitle, 
    StyledContent,
    StyledText,
    StyledScore
} from './score-ways-item.styled'
import IconProvider from '../../../../../../../providers/icon/icon-provider'

const ScoreWaysItem = ({icon,score,text,title,marginBottom=4}) => {
    return (
        <StyledWrapper>
            <StyledIconWrap>
                <StyledIcon as={IconProvider} icon={icon} size="30px" />
            </StyledIconWrap>
            <StyledTitle marginBottom={marginBottom}>{title}</StyledTitle>
            <StyledContent>
                <StyledScore>{score}</StyledScore>
                <StyledText>{text}</StyledText>
            </StyledContent>
        </StyledWrapper>
    )
}

ScoreWaysItem.propTypes = {

}

export default ScoreWaysItem
