import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Trans } from 'react-i18next'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { signup } from '../../../../redux/actions/user-actions'
import Textbox from '../../../shared/form/textbox'
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
    StyledFooterLink,
    StyledPrivacy
} from './signup-view.styled'
import Button from '../../../shared/button/button'
import { buttonSizes } from '../../../../constants/button-configs'
import Paths from '../../../../utils/paths'

import FormGroup from '../../../shared/form/form-group'
import Validation from '../../../shared/form/validation'



const SignupView = ({ }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .matches(/^((\d{11})|([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}))$/i, t('signupView.usernameValidationText'))
                .required(t('signupView.usernameValidationText')),
            password: Yup.string()
                .required(t('signupView.passwordValidationText'))
        }),
        onSubmit: values => {
            dispatch(signup(values.username, values.password))
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
                    <StyledTitle>{t('signupView.title')}</StyledTitle>
                    <StyledDescription>
                        <Trans i18nKey="signupView.description"> <Link to={Paths.signin.getPath()}> </Link></Trans>
                    </StyledDescription>
                    <FormGroup>
                        <Textbox
                            autocomplete="off"
                            autoFocus={true}
                            placeholder={t('signupView.usernameInputPlaceholder')}
                            {...formik.getFieldProps('username')}
                        />
                        <Validation show={!!(formik.touched.username && formik.errors.username)} message={formik.errors.username || ''} />
                    </FormGroup>
                    <FormGroup>
                        <Textbox
                            type="password"
                            placeholder={t('signupView.passwordInputPlaceholder')}
                            {...formik.getFieldProps('password')}
                        />
                        <Validation show={!!(formik.touched.password && formik.errors.password)} message={formik.errors.password || ''} />
                    </FormGroup>
                    <FormGroup>
                        <StyledPrivacy>
                            <Trans
                                i18nKey="signupView.privacy" 
                                components={{ 1: <Link to={Paths.home.getPath()}> </Link>, 2: <Link to={Paths.signin.getPath()}> </Link> }}
                            />
                        </StyledPrivacy>
                    </FormGroup>
                    <FormGroup marginTopUnit={5}>
                        <Button type="submit" matchParent={true} size={buttonSizes.LARGE}>{t('signupView.button')}</Button>
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

SignupView.propTypes = {

}

export default SignupView
