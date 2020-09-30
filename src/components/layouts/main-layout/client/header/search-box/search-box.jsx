import React from 'react'
import { useTranslation } from 'react-i18next'

import Textbox from '../../../../../shared/textbox'

import {
    Wrapper
} from './search-box.styled'

const SearchBox = () => {
    const {t} = useTranslation()

    const buttonHandler = () => {
        alert(123);
    }

    return (
        <Wrapper>
            <Textbox placeholder={t('searchboxPlaceholder')} icon="search" buttonCallback={buttonHandler} />
        </Wrapper>
    )
}

export default SearchBox
