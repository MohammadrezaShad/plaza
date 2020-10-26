import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ theme }) => theme.dim[2]};
`;

export const StyledText = styled.span`
  display: inline-flex;
  ${({ theme }) => theme.typography.bodyMdNormal};
  color: ${({ theme }) => theme.palette.onSurface};
  white-space: nowrap; 
  margin-left:${({theme})=>theme.dim[2]};
`;

export const StyledPoint = styled.span`
  display: inline-flex;
`;

export const StyledMaxPoint = styled.span`
  display: inline-flex;
  ${({ theme }) => theme.typography.bodyMdNormal};
  color:${({theme})=>theme.palette.subtitle};
  align-self: center;
  height:100%;
  line-height:1;
`;

export const StyledCurrentPoint = styled.span`
  display: inline-flex;
  align-items: center;
  color:${({theme})=>theme.palette.primary};
  ${({ theme }) => theme.typography.bodyXLgBold};
  line-height:1;
  `;

export const StyledSeperator = styled.span`
  display: inline-flex;
  color: ${({ theme }) => theme.palette.onSurface};
  padding: 0 ${({theme})=>theme.dim[1]};
  align-items: center;
`;
