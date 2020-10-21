import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import {StyledWrapper} from './header-list.styled'
import HeaderListItem from './header-list-item'
import Paths from '../../../../../../utils/paths'

const HeaderList = ({}) => {
    const {t}=useTranslation()
    return (
        <StyledWrapper>
            <HeaderListItem text={t('aboutClub')} href={Paths.home.getPath()} />
            <HeaderListItem text={t('coworkers')} href={Paths.home.getPath()} />
            <HeaderListItem text={t('awards')} href={Paths.home.getPath()} />
            <HeaderListItem text={t('termsOfClub')} href={Paths.home.getPath()} />
        </StyledWrapper>
    )
}

HeaderList.propTypes = {

}

export default HeaderList
