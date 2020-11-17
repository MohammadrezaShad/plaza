import React from 'react'
import PropTypes from 'prop-types'

import {
    StyledWrapper,
    StyledProgress,
    StyledText,
    StyledTitle,
    StyledContent,
    StyledLayout,
    StyledStop,
    StyledWrap,
    StyledTextWrap,
    StyledStopLayout
} from './mail-cost-progress.styled'

const MailCostProgress = ({ progress = 100 }) => {
    return (
        <StyledWrapper>
            <StyledContent>
                <StyledTitle>ارسال رایگان</StyledTitle>
                <StyledText>136000 تومان تا ارسال رایگان</StyledText>
            </StyledContent>
            <StyledProgress progress={progress}>
                <StyledLayout progress={progress}></StyledLayout>
                <StyledWrap progress={progress}>
                    <StyledStop>
                        <StyledStopLayout></StyledStopLayout>
                    </StyledStop>
                    <StyledStop>
                        <StyledStopLayout></StyledStopLayout>
                    </StyledStop>
                    <StyledStop>
                        <StyledStopLayout></StyledStopLayout>
                    </StyledStop>
                    <StyledStop>
                        <StyledStopLayout></StyledStopLayout>
                    </StyledStop>
                </StyledWrap>
            </StyledProgress>
            <StyledContent>
                <StyledTextWrap>
                    <StyledText>0</StyledText>
                </StyledTextWrap>
                <StyledTextWrap>
                    <StyledText>50000</StyledText>
                </StyledTextWrap>
                <StyledTextWrap>
                    <StyledText>100000</StyledText>
                </StyledTextWrap>
                <StyledTextWrap>
                    <StyledText>200000</StyledText>
                </StyledTextWrap>
            </StyledContent>
        </StyledWrapper>
    )
}

MailCostProgress.propTypes = {

}

export default MailCostProgress
