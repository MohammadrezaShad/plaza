import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  flex: 1;
  padding:${({ theme }) => theme.dim[4]};
  border: 1px solid ${({ theme }) => theme.palette.stroke};
  border-radius: ${({ theme }) => theme.defaults.borderRadius};
  &:not(:first-child) {
    margin-top: ${({ theme }) => theme.dim[2]};
  }
`;

export const StyledTitle = styled.span`
  display: inline-block;
  ${({ theme }) => theme.typography.headline1};
  color: ${({ theme }) => theme.palette.onSurface};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height:1.1;
`;

export const ButtonWrapper = styled.div`
  align-self: flex-end;
`;

export const StyledText = styled.span`
  display:inline-block;
  ${({ theme }) => theme.typography.bodyMdNormal};
  margin-top:${({theme})=>theme.dim[1]};
  margin-bottom:${({theme})=>theme.dim[2]};
`;
