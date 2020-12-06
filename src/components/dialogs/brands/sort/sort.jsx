import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import Dialog from '../../../shared/dialog'
import RadioButton from '../../../shared/form/radio-button'
import IconProvider from '../../../../providers/icon/icon-provider'
import {
    StyledHead,
    StyledWrapper,
    StyledTitle,
    StyledIcon,
    StyledContent,
    StyledItem
} from './sort.styled'

const Sort = ({ onClose, onChange, sorts, ...props }) => {
    const { t } = useTranslation()
    return (
        <Dialog onClose={onClose} {...props}>
            <StyledWrapper>
                <StyledHead>
                    <StyledIcon onClick={onClose} as={IconProvider} icon="close" size="12px" />
                    <StyledTitle>{t('sort')}</StyledTitle>

                </StyledHead>
                <StyledContent>
                    {
                        sorts.map(({ id, title }) => {
                            return (
                                <StyledItem key={id}>
                                    <RadioButton
                                        onChange={() => { onChange(title) }}
                                        name="sort"
                                        text={title} />
                                </StyledItem>
                            )
                        })
                    }
                </StyledContent>
            </StyledWrapper>
        </Dialog>
    )
}

Sort.propTypes = {
    onChange: PropTypes.func,
    onClose: PropTypes.func,
    sorts: PropTypes.array
}

export default Sort
