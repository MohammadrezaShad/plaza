import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import { 
    StyledImg, 
    StyledContent, 
    StyledTitle, 
    StyledText, 
    StyledLink 
} from './history-empty.styled'
import Button from '../../../../../../shared/button'
import Paths from '../../../../../../../utils/paths'

const HistoryEmpty = props => {
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

HistoryEmpty.propTypes = {

}

export default HistoryEmpty
