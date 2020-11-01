import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useTranslation } from 'react-i18next'

import { StyledWrapper, StyledTitle, StyledForm, StyledButtonsWrap } from './buy-together.styled'
import Dialog from '../../../shared/dialog'
import Textbox from '../../../shared/form/textbox'
import FormGroup from '../../../shared/form/form-group'
import Validation from '../../../shared/form/validation'
import { buttonSizes, buttonVariants } from '../../../../constants/button-configs'
import Button from '../../../shared/button'

const BuyTogether = ({ onClose, ...props }) => {
    const { t } = useTranslation()
    const formik = useFormik({
        initialValues: {
            username: '',
            displayName: '',
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .matches(/^((\d{11})|([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}))$/i, t('plazaClubArea.usernameValidationText'))
                .required(t('plazaClubArea.usernameValidationText')),
            displayName: Yup.string()
                .required(t('plazaClubArea.displayNameValidationText'))
        }),
        onSubmit: (values, { resetForm }) => {
            resetForm({ values: '' })
            onClose()
        },
        onReset: (values, { resetForm }) => {
            onClose()
        }
    });
    return (
        <Dialog onClose={onClose} {...props}>
            <StyledWrapper>
                <StyledTitle>{t('plazaClubArea.addNewBuyTogether')}</StyledTitle>
                <StyledForm onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
                    <FormGroup>
                        <Textbox
                            autocomplete="off"
                            placeholder={t('plazaClubArea.displayNameInputPlaceholder')}
                            {...formik.getFieldProps('displayName')}
                        />
                        <Validation show={!!(formik.touched.displayName && formik.errors.displayName)} message={formik.errors.displayName || ''} />
                    </FormGroup>
                    <FormGroup>
                        <Textbox
                            autocomplete="off"
                            placeholder={t('plazaClubArea.usernameInputPlaceholder')}
                            {...formik.getFieldProps('username')}
                        />
                        <Validation show={!!(formik.touched.username && formik.errors.username)} message={formik.errors.username || ''} />
                    </FormGroup>
                    <FormGroup marginTopUnit={3}>
                        <StyledButtonsWrap>
                            <Button type="reset" variant={buttonVariants.LINK} size={buttonSizes.MEDIUM}>{t('cancel')}</Button>
                            <Button type="submit" variant={buttonVariants.OUTLINE} size={buttonSizes.MEDIUM}>{t('add')}</Button>
                        </StyledButtonsWrap>
                    </FormGroup>
                </StyledForm>
            </StyledWrapper>
        </Dialog>
    )
}

BuyTogether.propTypes = {
    onClose: PropTypes.func
}

export default BuyTogether
