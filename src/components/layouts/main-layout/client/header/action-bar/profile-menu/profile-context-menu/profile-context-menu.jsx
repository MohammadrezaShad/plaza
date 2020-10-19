import React from 'react'
import PropTypes from 'prop-types'

import {
    Wrapper,
    Header,
    Avatar,
    HeaderContent,
    HeaderTitle,
    HeaderText,
    Content,
    Button,
    ButtonIcon
} from './profile-context-menu.styled'
import IconProvider from '../../../../../../../../providers/icon/icon-provider'
import { Link } from 'react-router-dom'
import Paths from '../../../../../../../../utils/paths'
import { useTranslation } from 'react-i18next'
import ProfileAvatar from '../../../../../../../shared/profile-details/profile-avatar'

const ProfileContextMenu = ({level, logoutHandler, displayName, point}) => {
    const {t} = useTranslation();


    return (
        <Wrapper>
            <Header>
                <ProfileAvatar level={level}/>
                <HeaderContent>
                    <HeaderTitle>{displayName}</HeaderTitle>
                    <HeaderText>{t('score')} : {point.toLocaleString()}</HeaderText>
                </HeaderContent>
            </Header>
            <Content>
                <Button as={Link} to={Paths.profile.home.getPath()}>
                    <ButtonIcon as={IconProvider} icon="user" size="20px" />
                    {t('profile')}
                </Button>
                <Button as={Link} to={Paths.club.home.getPath()}>
                    <ButtonIcon as={IconProvider} icon="club" size="20px" />
                    {t('club')}
                </Button>
                <Button as={Link} to={Paths.profile.orders.getPath()}>
                    <ButtonIcon as={IconProvider} icon="shopping-cart" size="20px" />
                    {t('myOrders')}
                </Button>
                <Button onClick={logoutHandler}>
                    <ButtonIcon as={IconProvider} icon="logout" size="20px" />
                    {t('signout')}
                </Button>
            </Content>
        </Wrapper>
        
    )
}

ProfileContextMenu.propTypes = {
    displayName:PropTypes.string,
    level:PropTypes.number,
    logoutHandler: PropTypes.func,
    point: PropTypes.number
}

export default ProfileContextMenu
