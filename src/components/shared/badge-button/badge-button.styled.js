import styled , {css} from "styled-components";
import { badgeButtonVariants } from "../../../constants/badge-button-config";

const buttonThemeSwitch=(status,theme)=>{
    if(status===badgeButtonVariants.SUCCESS){
        return css`
        color:${theme.palette.onPrimary};
        background-color:${theme.palette.success};
        border:1px solid ${theme.palette.success};
         `
    }else if (status===badgeButtonVariants.ERROR){
        return css`
        color:${theme.palette.onPrimary};
        background-color:${theme.palette.error};
        border:1px solid ${theme.palette.error};
        `
    }else if (status===badgeButtonVariants.CHECK){
        return css`
        color:${theme.palette.onSurface};
        background-color:${theme.palette.back};
        border:1px dashed ${theme.palette.stroke};
        `
    }
}

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.typography.subtitleXsNormal};
  padding: 0 ${({ theme }) => theme.dim[1]};
  border-radius: ${({ theme }) => theme.defaults.borderRadius};
  ${({theme,status})=>buttonThemeSwitch(status,theme)};
`;
