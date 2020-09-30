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

const ProfileContextMenu = ({level}) => {
    const {t} = useTranslation();

    const signoutHandler = () => {
        alert("signout");
    }

    return (
        <Wrapper>
            <Header>
                <Avatar level={level}>
                    <IconProvider icon="user" size="32px" />
                </Avatar>
                <HeaderContent>
                    <HeaderTitle>محمد زاهدی شاقاجی</HeaderTitle>
                    <HeaderText>{t('score')} : 1,200</HeaderText>
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
                <Button onClick={signoutHandler}>
                    <ButtonIcon as={IconProvider} icon="logout" size="20px" />
                    {t('signout')}
                </Button>
            </Content>
        </Wrapper>
        
    )
}

ProfileContextMenu.propTypes = {

}

export default ProfileContextMenu
