import React from 'react'
import PropTypes from 'prop-types'

import {
    StyledWrapper,
    StyledHead,
    StyledContent,
    StyledCheckbox,
    StyledDetail,
    StyledTitle,
    StyledAddress,
    StyledButtonWrap,
    StyledSpecifications,
    StyledIcon,
    StyledText
} from './delivery-address.styled'
import Button from '../button'
import { buttonColors, buttonSizes, buttonVariants } from '../../../constants/button-configs'
import Checkbox from '../form/checkbox'
import IconProvider from '../../../providers/icon/icon-provider'

const DeliveryAddress = props => {
    return (
        <StyledWrapper>
            <StyledHead>
                <StyledTitle>انتخاب آدرس تحویل</StyledTitle>
                <Button
                    text="افزودن آدرس جدید"
                    variant={buttonVariants.OUTLINE} 
                    size={buttonSizes.S_MEDIUM}
                    />
            </StyledHead>
            <StyledContent>
                <StyledCheckbox>
                    <Checkbox />
                </StyledCheckbox>
                <StyledDetail>
                    <StyledAddress>
                        گیلان، رشت، بلوار مطهری، ساختمان آستان، طبقه دوم، فروشگاه پلازا
                     </StyledAddress>
                    <StyledSpecifications>
                        <StyledIcon as={IconProvider} icon="user" size="16px" />
                        <StyledText>ابراهیم پوریزدان خواه</StyledText>
                    </StyledSpecifications>
                    <StyledButtonWrap>
                        <Button
                            text="آدرس های دیگر"
                            variant={buttonVariants.LINK}
                            color={buttonColors.SECONDARY}
                            size={buttonSizes.SMALL}
                        />
                        <Button
                            text="ویرایش آدرس"
                            variant={buttonVariants.LINK}
                            color={buttonColors.SECONDARY}
                            size={buttonSizes.SMALL}
                        />
                    </StyledButtonWrap>
                </StyledDetail>
            </StyledContent>
        </StyledWrapper>
    )
}

DeliveryAddress.propTypes = {

}

export default DeliveryAddress
