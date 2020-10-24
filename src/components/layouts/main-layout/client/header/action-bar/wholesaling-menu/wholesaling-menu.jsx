import React, { useState } from 'react'
import PropTypes from 'prop-types'
import HeaderMenu from '../header-menu'
import WithUserState from '../../../../../../../hoc/with-user-state'

import {
    StyledHeader,
    StyledContent,
    StyledStateIcon
} from './wholesaling.menu.styled'
import ContextMenuItem from '../../../../../../shared/context-menu/context-menu-item'
import IconProvider from '../../../../../../../providers/icon/icon-provider'
import { useTranslation } from 'react-i18next'

const WholesalingMenu = ({wholeSalingName, wholeSalingState}) => {
    const {t} = useTranslation();
    return (
        wholeSalingName
        ?
        <HeaderMenu icon="wholesaling" showWarning={wholeSalingState == 1} hasHeader={true}>
            <StyledHeader>{wholeSalingName}</StyledHeader>
            <StyledContent>
                <ContextMenuItem text={t('yourRequestState')} iconName="req-status">{wholeSalingState == 1 ? <StyledStateIcon as={IconProvider} icon="alert" size="24px" /> : <StyledStateIcon as={IconProvider} icon="true" size="24px" $isSuccess={true} />}</ContextMenuItem>
                <ContextMenuItem text={t('wholeSalingAbout')} iconName="about" />
                <ContextMenuItem text={t('plazaPlusAppDownload')} iconName="download" />
            </StyledContent>
            
        </HeaderMenu>
        : 
        null
    )
}

WholesalingMenu.propTypes = {
    isWholeSaler: PropTypes.bool,
    wholeSalingState: PropTypes.number
}

export default WithUserState(WholesalingMenu)
