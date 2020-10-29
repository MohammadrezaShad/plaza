import React from 'react'
import PropTypes from 'prop-types'

import { StyledTable, StyledTableHead, StyledTableRow, StyledTableCell, StyledTableHeadCell } from './table.styled'

const Table = ({ headerConfig, rowConfig }) => {
    return (
        <StyledTable>
            <StyledTableHead>
                {
                    headerConfig.map((config, index) => {
                        return <StyledTableHeadCell key={index}>{config.title}</StyledTableHeadCell>
                    })
                }
            </StyledTableHead>
            {
                rowConfig.map((config, index) => {

                    return (
                        <StyledTableRow key={index}>
                            {
                                Object.values(config).map((item, index) => {
                                    return (
                                        <StyledTableCell key={index}>{item}</StyledTableCell>
                                    )
                                })
                            }
                        </StyledTableRow>
                    )
                })
            }
        </StyledTable>
    )
}

Table.propTypes = {
    headerConfig: PropTypes.array,
    rowConfig: PropTypes.array
}

export default Table
