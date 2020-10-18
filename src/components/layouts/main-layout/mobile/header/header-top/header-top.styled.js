import styled from "styled-components";
import {Link} from 'react-router-dom'

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.dim[2]};
  background-color: ${({ theme }) => theme.palette.back};
  height: 48px;
`;

export const StyledContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLink=styled(Link)`
 display:inline-flex;
`