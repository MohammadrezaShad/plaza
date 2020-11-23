import styled from 'styled-components'
import { buttonColors, buttonSizes, buttonVariants } from '../../../constants/button-configs'

export const StyledWrapper = styled.button`
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:${({ theme }) => theme.defaults.borderRadius};
    text-decoration:none;
    white-space:${({ textWrap }) => textWrap ? 'normal' : 'nowrap'};
    cursor:pointer;
    width:${({ matchParent }) => matchParent ? '100%' : null};
    opacity:${({$disabled})=>$disabled ? '32%':1};
    background-color:${({ color, theme, variant }) => {
        if (variant == buttonVariants.OUTLINE || variant == buttonVariants.LINK) {
            return null
        }
        switch (color) {
            case buttonColors.SECONDARY:
                return theme.palette.secondary

            default:
                return theme.palette.primary
        }
    }};
    border:${({ color, theme, variant, $disabled }) => {
        if (variant == buttonVariants.FILL || variant == buttonVariants.LINK) {
            return null
        }
        switch (color) {
            case buttonColors.PRIMARY:
                return `1px solid ` + theme.palette.primary
            case buttonColors.SECONDARY:
                return `1px solid ` + theme.palette.secondary

            default:
                return `1px solid ` + theme.palette.stroke
        }
    }};
    color:${({ color, theme, variant, $disabled }) => {
        if (variant == buttonVariants.LINK || variant == buttonVariants.OUTLINE) {
            switch (color) {
                case buttonColors.PRIMARY:
                    return theme.palette.primary

                case buttonColors.SECONDARY:
                    return theme.palette.secondary

                default:
                    return theme.palette.onBack
            }
        } else {
            switch (color) {
                case buttonColors.SECONDARY:
                    return theme.palette.onSecondary

                default:
                    return theme.palette.onPrimary
            }
        }
    }};
    min-height:${({ size }) => {
        switch (size) {
            case buttonSizes.MEDIUM:
                return '40px'

            case buttonSizes.S_MEDIUM:
                return '30px'

            case buttonSizes.SMALL:
                return '24px'

            default:
                return '56px'
        }
    }};
    padding-right:${({ size, theme, variant }) => {
        if (variant == buttonVariants.LINK) {
            return null
        }
        switch (size) {
            case buttonSizes.MEDIUM:
                return theme.dim[2]

            case buttonSizes.S_MEDIUM:
                return theme.dim[1]

            case buttonSizes.SMALL:
                return theme.dim[1]

            default:
                return theme.dim[4]
        }
    }};
    padding-left:${({ size, theme, variant }) => {
        if (variant == buttonVariants.LINK) {
            return null
        }
        switch (size) {
            case buttonSizes.MEDIUM:
                return theme.dim[2]

            case buttonSizes.S_MEDIUM:
                return theme.dim[1]

            case buttonSizes.SMALL:
                return theme.dim[1]

            default:
                return theme.dim[4]
        }
    }};
    ${({ size, theme }) => {
        switch (size) {
            case buttonSizes.MEDIUM:
                return theme.typography.buttonMdNormal

            case buttonSizes.S_MEDIUM:
                return theme.typography.buttonMdNormal

            case buttonSizes.SMALL:
                return theme.typography.buttonXsNormal

            default:
                return theme.typography.headline1
        }
    }}

`