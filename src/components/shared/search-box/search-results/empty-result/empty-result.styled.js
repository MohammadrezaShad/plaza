import styled from "styled-components";

const Wrapper = styled.div`
/* display:${({$searchItems})=>$searchItems ? 'block':'none'}; */
`;

const Message = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.palette.error};
  border-radius: 0.4rem;
  align-items: center;
  padding: 12px ${({ theme }) => theme.dim[2]};
`;

const Icon = styled.button`
  color: ${({ theme }) => theme.palette.onPrimary};
`;

const ErrorText = styled.p`
  display: inline-flex;
  color: ${({ theme }) => theme.palette.onPrimary};
  margin-right: ${({ theme }) => theme.dim[2]};
  ${({ theme }) => theme.typography.bodyMdNormal}
`;

const Hint=styled.div`
  margin-top:${({theme})=>theme.dim[2]};
`
const Text=styled.span`
  display:block;
  color: ${({ theme }) => theme.palette.onSurface};
  ${({ theme }) => theme.typography.bodyMdNormal};
  &:last-child{
      margin-top:${({ theme }) => theme.dim[1]};
  }
`

export { 
    Wrapper,
    Message,
    Icon,
    ErrorText ,
    Hint,
    Text
    };
