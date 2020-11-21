import styled, { css } from "styled-components";

const Wrapper = styled.span`
  position: relative;
  display: block;
`;

const Input = styled.input`
  border: 1px solid ${({ theme,success,error }) =>error ? theme.palette.error :success ? theme.palette.success: theme.palette.stroke};
  width: 100%;
  border-radius: ${({ theme }) => theme.defaults.borderRadius};
  height: 40px;
  padding: 0 ${({ theme }) => theme.dim[2]};
  padding-left: ${({ theme, hasIcon }) => (hasIcon ? theme.dim[5] : theme.dim[2])};
  transition: 0.3s all;
  background-color: ${({ theme }) => theme.palette.back};
  ${({ theme }) => theme.typography.bodySmNormal}
  &:focus {
    box-shadow: ${({ theme }) => theme.defaults.shortBoxShadow};
  }
`;

const Icon = styled.span`
  position: absolute;
  top: 50%;
  padding: ${({ theme }) => theme.dim[1]};
  left: ${({ theme, onClick }) => (onClick ? theme.dim[1] : 0)};
  transform: translateY(-50%);
  color: ${({ theme ,iconColor}) =>iconColor==="onSurface" ?  theme.palette.onSurface:theme.palette.subtitle};
  cursor: ${({ onClick }) => (onClick ? "pointer" : "default")};
  ${({ buttonCallback }) =>
    buttonCallback
      ? css`
          &:after {
            content: "";
            position: absolute;
            top: ${({ theme }) => theme.dim[1]};
            bottom: ${({ theme }) => theme.dim[1]};
            right: -${({ theme }) => theme.dim[1]};
            width: 1px;
            background-color: ${({ theme }) => theme.palette.stroke};
          }
        `
      : ""};
`;

export { Wrapper, Input, Icon };
