import styled from "styled-components";


export const StyledLayout=styled.div`
    background-color: ${({theme})=>theme.palette.back};
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    left: 15.5%;
    overflow: auto;
    box-shadow: -25px 0px 28px -6px rgba(0, 0, 0, 0.05);
    transform:${({showDrawer})=>showDrawer ? 'translate(0, 0)':'translate(100%, 0)'} ;
    transition: transform 0.3s linear;
`

export const StyledWrapper = styled.div`
  padding: ${({ theme }) => theme.dim[3]};
`;

