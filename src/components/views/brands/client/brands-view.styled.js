import styled from "styled-components";

export const StyledWrapper = styled.div`
  padding: ${({ theme }) => theme.dim[4]}
    ${({ theme }) => theme.defaults.screenSideDim};
`;

export const StyledLayout = styled.div`
  max-width: ${({ theme }) => theme.defaults.screenWideSize};
  margin-right: auto;
  margin-left: auto;
`;

export const StyleContentdBlock = styled.div`
  display: flex;
  margin: 0 -${({ theme }) => theme.dim[2]};
`;

export const StyledSidebarBlock = styled.div`
  padding: 0 ${({ theme }) => theme.dim[2]};
  flex: 0 0 25%;
  min-width: 0;
`;

export const StyledContainer = styled.div`
  /* display: flex;
  margin: 0 -${({ theme }) => theme.dim[2]}; */
`;

export const StyledTopWrap = styled.div`
  padding: 0 ${({ theme }) => theme.dim[2]};
  flex: 0 0 75%;
  min-width: 0;
`;
export const StyledTop = styled.div``;

export const StyledPreviewWrap = styled.div`
  padding: 0 ${({ theme }) => theme.dim[2]};
  flex: 0 0 25%;
  min-width: 0;
`;

export const StyledPreview = styled.div`
  padding: ${({ theme }) => theme.dim[4]};
  border: 1px solid ${({ theme }) => theme.palette.stroke};
  border-radius: ${({ theme }) => theme.defaults.borderRadius};
`;

export const StyledContent = styled.div`
  padding: 0 ${({ theme }) => theme.dim[2]};
  flex: 0 0 75%;
  min-width: 0;
  padding-top: ${({ theme }) => theme.dim[4]};
`;
export const StyledBlock = styled.div`
  display: flex;
  margin: 0 -${({ theme }) => theme.dim[2]};
`;
