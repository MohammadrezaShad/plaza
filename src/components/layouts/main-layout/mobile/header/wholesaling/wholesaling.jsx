import React from "react";
import IconProvider from "../../../../../../providers/icon/icon-provider";

import { 
  StyledWrapper,
  StyledContent,
  StyledAlertIcon,
  StyledBoldText,
  StyledArrowIcon,
  StyledText
} from "./wholesaling.styled";

const Wholesaling = () => {
  return (
    <StyledWrapper>
      <StyledContent>
        <StyledAlertIcon as={IconProvider} icon="alert-o" size="24px" />
        <StyledBoldText>تکنوگیل شمال</StyledBoldText>
        <StyledArrowIcon as={IconProvider} icon="chevron-left" size="6px"/>
      </StyledContent>
      <StyledContent>
        <StyledText>وضعیت درخواست</StyledText>
      </StyledContent>
    </StyledWrapper>
  );
};

export default Wholesaling;
