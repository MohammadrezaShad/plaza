import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import { 
    StyledImg, 
    StyledContent, 
    StyledTitle, 
    StyledText, 
    StyledLink 
} from './table-empty.styled'
import Paths from '../../../../utils/paths'
import Button from '../../button'

const TableEmpty = props => {
    const { t } = useTranslation()

    return (
        <Fragment>
            <StyledImg />
            <StyledContent>
                <StyledTitle>{t('plazaClubArea.pointsHistoryEmptyAlert')}</StyledTitle>
                <StyledText>{t('plazaClubArea.pointsTip')}</StyledText>
                <StyledLink to={Paths.home.getPath()}>
                    <Button>{t('plazaClubArea.clubGuide')}</Button>
                </StyledLink>
            </StyledContent>
        </Fragment>
    )
}

TableEmpty.propTypes = {

}

export default TableEmpty
