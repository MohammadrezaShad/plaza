import React from 'react'
import PropTypes from 'prop-types'
import { Trans, useTranslation } from 'react-i18next'

import { StyledWrapper, StyledName, StyledText, StyledButtonsWrap } from './confirm.styled'
import Dialog from '../../../shared/dialog'
import Button from '../../../shared/button'
import { buttonSizes, buttonVariants } from '../../../../constants/button-configs'

const Confirm = ({ onClose, OnRemove, name = "احسان جلالی", ...props }) => {
    const { t } = useTranslation()
    const RemoveHandler = () => {
        OnRemove()
        onClose()
    }


    return (
        <Dialog onClose={onClose} {...props}>
            <StyledWrapper>
                <StyledText>
                    <Trans i18nKey="plazaClubArea.confirmText" values={{ name }} components={[<StyledName></StyledName>]}> </Trans>
                </StyledText>
                <StyledButtonsWrap>
                    <Button variant={buttonVariants.LINK} size={buttonSizes.MEDIUM} onClick={onClose}>{t('myMistake')}</Button>
                    <Button variant={buttonVariants.OUTLINE} size={buttonSizes.MEDIUM} onClick={RemoveHandler}>{t('iMSure')}</Button>
                </StyledButtonsWrap>
            </StyledWrapper>
        </Dialog >
    )
}

Confirm.propTypes = {

}

export default Confirm
