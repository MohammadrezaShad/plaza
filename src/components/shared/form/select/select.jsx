import React, { useContext } from 'react'
import PropTypes, { element } from 'prop-types'
import ReactSelect from 'react-select'
import { ThemeContext } from 'styled-components';

import {
    StyledWrapper
} from './select.styled'
import camelcase from 'camelcase';

const Select = ({
    options,
    isDisabled,
    // isLoading,
    isClearable = false,
    isSearchable = false,
    name,
    value,
    onChange
}) => {
    const themeContext = useContext(ThemeContext);

    const customStyles = {
        control:(provided, state) => {
            return {
                ...provided,
                borderColor:themeContext.palette.stroke,
                backgroundColor:themeContext.palette.back,
                outline:'none',
                boxShadow:'none',
                minHeight:'40px',
                borderRadius:themeContext.defaults.borderRadius,
                ':hover':{
                    borderColor:themeContext.palette.stroke,
                }
            }
        },
        indicatorSeparator: () => ({
            display:'none'
        }),
        singleValue: (provided, state) => {
            const fontStyles = themeContext.typography.buttonMdNormal.split(';');
            let output = {
                ...provided,
                color: themeContext.palette.onBack,
                margin:0
            }

            fontStyles.forEach(element => {
                const splited = element.split(':');
                output[camelcase(splited[0])] = splited[1]
            });

            return output
        },
        dropdownIndicator: (provided, state) => {
            return {
                ...provided,
                padding:themeContext.dim[1],
                paddingRight:0,
                'SVG': {
                    transform:state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0)'
                },
                'PATH':{
                    fill:state.selectProps.menuIsOpen ? themeContext.palette.primary : themeContext.palette.onBack,
                }
            }
        },
        valueContainer: (provided, state) => {
            return {
                ...provided,
                paddingRight:themeContext.dim[2],
                paddingLeft:themeContext.dim[1],
            }
        },
        menu: (provided, state) => {
            return {
                ...provided,
                border:`1px solid ${themeContext.palette.stroke}`,
                borderRadius:themeContext.defaults.borderRadius,
                borderTopRightRadius:0,
                borderTopLeftRadius:0,
                borderTop:'none',
                boxShadow:themeContext.defaults.shortBoxShadow,
                backgroundColor:themeContext.palette.back,
                top:'100%',
                paddingTop: themeContext.defaults.borderRadius,
                marginTop: '-' + themeContext.defaults.borderRadius,
                '::before':{
                    content:'""',
                    position:'absolute',
                    top:themeContext.defaults.borderRadius,
                    right:themeContext.dim[2],
                    left:themeContext.dim[2],
                    borderTop:`1px solid ${themeContext.palette.strokeVariant}` ,
                }
            }
        },
        option: (provided, state) => {
            const fontStyles = themeContext.typography.buttonMdNormal.split(';');
            
            let output = {
                ...provided,
                color: state.isSelected  ? themeContext.palette.onSurface : themeContext.palette.onBack,
                backgroundColor:state.isSelected  ? themeContext.palette.surface : themeContext.palette.back,
                margin:0,
                ':hover':{
                    cursor:'pointer',
                    backgroundColor:state.isSelected  ? themeContext.palette.surface : themeContext.palette.back
                }
            }

            fontStyles.forEach(element => {
                const splited = element.split(':');
                output[camelcase(splited[0])] = splited[1]
            });

            return output
        }
    }

    return (
        <StyledWrapper
            styles={customStyles}
            as={ReactSelect}
            options={options}
            classNamePrefix="select"
            defaultValue={value}
            isDisabled={isDisabled}
            // isLoading={isLoading}
            isClearable={isClearable}
            // isRtl={isRtl}
            isSearchable={isSearchable}
            name={name}
            onChange={onChange}
        />
    )
}

Select.propTypes = {
    options: PropTypes.array,
    isDisabled: PropTypes.bool,
    // isLoading: PropTypes.bool,
    isClearable: PropTypes.bool,
    isSearchable: PropTypes.bool,
    name: PropTypes.string,
    value: PropTypes.object,
    onChange: PropTypes.func
}

export default Select
