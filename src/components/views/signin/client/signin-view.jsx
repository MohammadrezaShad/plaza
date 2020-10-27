import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Trans } from 'react-i18next'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { login } from '../../../../redux/actions/user-actions'
import Textbox from '../../../shared/textbox'
import { ReactComponent as Logo } from '../../../../assets/images/logo.svg'

import {
    StyledWrapper,
    StyledContainer,
    StyledHeader,
    StyledHeaderLogo,
    StyledForm,
    StyledTitle,
    StyledDescription,
    StyledFooter,
    StyledFooterLink
} from './signin-view.styled'
import Button from '../../../shared/button/button'
import { buttonSizes } from '../../../../constants/button-configs'
import Paths from '../../../../utils/paths'

import FormGroup from '../../../shared/form/form-group'
import Checkbox from '../../../shared/form/checkbox'
import Validation from '../../../shared/form/validation'


const SigninView = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            rememberMe: false
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .matches(/^((\d{11})|([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}))$/i,t('signinView.usernameValidationText'))
                .required(t('signinView.usernameValidationText')),
            password: Yup.string()
                .required(t('signinView.passwordValidationText'))
        }),
        onSubmit: values => {
            dispatch(login(values.username, values.password, values.rememberMe))
        }
    });

    return (
        <StyledWrapper>
            <StyledContainer>
                <StyledHeader>
                    <Link to={Paths.home.getPath()}>
                        <StyledHeaderLogo as={Logo} />
                    </Link>
                </StyledHeader>
                <StyledForm onSubmit={formik.handleSubmit}>
                    <StyledTitle>{t('signinView.title')}</StyledTitle>
                    <StyledDescription>
                        <Trans i18nKey="signinView.description"> <Link to={Paths.signup.getPath()}> </Link></Trans>
                    </StyledDescription>
                    <FormGroup>
                        <Textbox
                            autocomplete="off"
                            autoFocus={true}
                            placeholder={t('signinView.usernameInputPlaceholder')}
                            {...formik.getFieldProps('username')}
                        />
                        <Validation show={!!(formik.touched.username && formik.errors.username)} message={formik.errors.username || ''} />
                    </FormGroup>
                    <FormGroup>
                        <Textbox
                            type="password"
                            placeholder={t('signinView.passwordInputPlaceholder')}
                            {...formik.getFieldProps('password')}
                        />
                        <Validation show={!!(formik.touched.password && formik.errors.password)} message={formik.errors.password || ''} />
                    </FormGroup>
                    <FormGroup>
                        <Checkbox
                            text={t('signinView.rememberMe')}
                            {...formik.getFieldProps('rememberMe')}
                        />
                    </FormGroup>
                    <FormGroup marginTopUnit={7}>
                        <Button type="submit" matchParent={true} size={buttonSizes.LARGE}>{t('signinView.button')}</Button>
                    </FormGroup>
                </StyledForm>
            </StyledContainer>
            <StyledFooter>
                <StyledFooterLink as={Link} to={Paths.about.getPath()}>{t('about')}</StyledFooterLink>
                <StyledFooterLink as={Link} to={Paths.contact.getPath()}>{t('contact')}</StyledFooterLink>
            </StyledFooter>
        </StyledWrapper>
    )
}

SigninView.propTypes = {

}

export default SigninView
