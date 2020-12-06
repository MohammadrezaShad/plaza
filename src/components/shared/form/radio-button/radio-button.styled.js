import styled from "styled-components";

export const StyledWrapper = styled.label`
  display: inline-flex;
  align-items: center;
  position: relative;
`;

export const StyledLayout = styled.span`
  display: inline-flex;
  position: relative;
  height: 24px;
  width: 24px;
  border: 1px solid ${({ theme }) => theme.palette.stroke};
  border-radius: 50%;
  transition: background-color 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 8px;
    height: 8px;
    background-color: ${({ theme }) => theme.palette.back};
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: all 0.3s ease;
  }
`;

export const StyledRadio = styled.input`
  visibility: hidden;
  opacity: 0;
  width: 0;
  height: 0;
  &:checked ~ ${StyledLayout} {
    background-color: ${({ theme }) => theme.palette.success};
    border: none;
    transition: background-color 0.3s ease;

    &::before {
      transform: translate(-50%, -50%) scale(1);
      transition: transform 0.2s ease;
    }
  }
`;

export const StyledText = styled.span`
  cursor: pointer;
  display: inline-flex;
  color: ${({ theme }) => theme.palette.onSurface};
  ${({ theme }) => theme.typography.bodyMdNormal};
  margin-right: ${({ theme }) => theme.dim[2]};
`;
