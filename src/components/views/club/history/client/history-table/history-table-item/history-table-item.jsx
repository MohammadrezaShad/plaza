import React from 'react'
import PropTypes from 'prop-types'

import { StyledWrapper, StyledContent } from './history-table-item.styled'

const HistoryTableItem = ({ score, pointTitle, pointSubTitle, status, persuasivePoint, detail, href }) => {
    return (
        <StyledWrapper>
            <StyledContent>
                  {score}
            </StyledContent>
            <StyledContent>

            </StyledContent>
            <StyledContent>

            </StyledContent>
            <StyledContent>

            </StyledContent>
            <StyledContent>

            </StyledContent>
        </StyledWrapper>
    )
}

HistoryTableItem.propTypes = {
    score:PropTypes.number
}

export default HistoryTableItem
