import React from 'react'
import PropTypes from 'prop-types'

import {
    Wrapper,
    Message,
    Icon,
    ErrorText,
    Hint,
    Text
} from './empty-result.styled'
import IconProvider from '../../../../../providers/icon/icon-provider'

const EmptyResult = ({searchItems,term}) => {
    return (
        <Wrapper $searchItems={searchItems}>
            <Message>
            <Icon as={IconProvider} icon="alert-o" size="20px" />
            <ErrorText>کالایی با عبارت "عدهفغ" پیدا نشد</ErrorText>
            </Message>
            <Hint>
                <Text>از نامهای متداول و مناسب برای جستجو استفاده کنید</Text>
                <Text>در صورت وجود اشتباه تایپی، عبارت را اصلاح کنید</Text>
            </Hint>
        </Wrapper>
    )
}

EmptyResult.propTypes = {

}

export default EmptyResult
