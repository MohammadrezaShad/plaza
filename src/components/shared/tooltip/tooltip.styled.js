import styled from "styled-components";

export const StyledTooltip = styled.div`
  position: absolute;
  top: ${({ $top }) => ($top ? $top : 0)};
  left: ${({ $left }) => ($left ? $left : 0)};
  transform: ${({ above }) => (above ? "translate(-50%,-100%)" : "translate(-50%,0)")};
  border: 1px solid ${({ theme }) => theme.palette.stroke};
  border-radius: ${({ theme }) => theme.defaults.borderRadius};
  background-color: ${({ theme }) => theme.palette.back};
  opacity: ${({ show }) => (show ? "1" : "0")};
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  transition-property: visibility, opacity;
  box-shadow: ${({ theme }) => theme.defaults.boxShadow};
  transition: 0s visibility, 0.3s opacity;
  transition-delay: ${({ show }) => (show ? "0s , 0s" : ".3s , 0s")};
  min-width: ${({ $minWidth }) => $minWidth};
  &:after {
    content: "";
    position: absolute;
    right: 50%;
    bottom:${({ topTriangle }) => !topTriangle ? '-7px' : 'auto'};
    top:${({ topTriangle }) => topTriangle ? '-7px' : 'auto'};
    transform:${({ topTriangle }) => topTriangle ? 'translateX(50%) rotate(180deg)' : 'translateX(50%)'};
    width: 0px;
    height: 0px;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 7px solid ${({ theme }) => theme.palette.back};
  }
  &:before {
    content: "";
    position: absolute;
    bottom:${({ topTriangle }) => !topTriangle ? '-8px' : 'auto'};
    top:${({ topTriangle }) => topTriangle ? '-8px' : 'auto'};
    right: 50%;
    transform:${({ topTriangle }) => topTriangle ? 'translateX(50%) rotate(180deg)' : 'translateX(50%)'};
    width: 0px;
    height: 0px;
    border-left: 8.5px solid transparent;
    border-right: 8.5px solid transparent;
    border-top: 8px solid ${({ theme }) => theme.palette.stroke};
  }
`;

export const StyledHeader = styled.span`
  display: flex;
  ${({ theme }) => theme.typography.headline2};
  color:${({ theme }) => theme.palette.onSurface};
  padding: ${({ theme }) => theme.dim[1]} ${({ theme }) => theme.dim[2]};
  background-color: ${({ theme }) => theme.palette.surface};
  border-top-right-radius: ${({ theme }) => theme.defaults.borderRadius};
  border-top-left-radius: ${({ theme }) => theme.defaults.borderRadius};
`;

export const StyledText = styled.span`
  display:block;
  padding: ${({ theme }) => theme.dim[1]} ${({ theme }) => theme.dim[2]};
  padding-top:${({ theme, $isNotFirst }) => $isNotFirst ? Math.round(parseInt(theme.dim[1]) / 2) + 'px' : null};
  ${({ theme }) => theme.typography.bodyMdNormal};
  color:${({ theme }) => theme.palette.onBack};
  line-height:1;
`

export const StyledFooter = styled.span`
  display:block;
  padding: ${({ theme }) => theme.dim[1]} ${({ theme }) => theme.dim[2]} ${({ theme }) => theme.dim[2]};
  
`;
