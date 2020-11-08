import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 400px;
  max-width: 100%;
`;

export const StyledContainer = styled.section`
  border: 1px solid ${({ theme }) => theme.palette.stroke};
  border-radius: ${({ theme }) => theme.defaults.borderRadius};
  background-color: ${({ theme }) => theme.palette.back};
`;

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.palette.surface};
  padding: ${({ theme }) => theme.dim[3]};
  border-top-right-radius: ${({ theme }) => theme.defaults.borderRadius};
  border-top-left-radius: ${({ theme }) => theme.defaults.borderRadius};
  text-align: center;
`;

export const StyledHeaderLogo = styled.header`
  PATH {
    fill: ${({ theme }) => theme.palette.disabled};
  }
`;

export const StyledForm = styled.form`
  padding: ${({ theme }) => theme.dim[4]};
`;

export const StyledTitle = styled.h1`
  text-align: center;
  ${({ theme }) => theme.typography.headline1};
  color: ${({ theme }) => theme.palette.onBack};
`;

export const StyledDescription = styled.p`
  text-align: center;
  ${({ theme }) => theme.typography.bodyMdNormal};
  color: ${({ theme }) => theme.palette.onBack};
  margin-bottom: ${({ theme }) => theme.dim[3]};

  A {
    color: ${({ theme }) => theme.palette.secondary};
    text-decoration: none;
  }
`;

export const StyledFooter = styled.div`
  margin-top: ${({ theme }) => theme.dim[3]};
  text-align: center;
`;

export const StyledFooterLink = styled.a`
  position: relative;
  display: inline-block;
  ${({ theme }) => theme.typography.bodySmNormal};
  color: ${({ theme }) => theme.palette.onBack};
  padding-left: ${({ theme }) => theme.dim[3]};
  padding-right: ${({ theme }) => theme.dim[3]};
  text-decoration: none;

  ::before {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    width: 1px;
    height: 16px;
    background-color: ${({ theme }) => theme.palette.stroke};
    transform: translateY(-50%);
  }

  :first-child {
    ::before {
      display: none;
    }
  }
`;

export const StyledPrivacy = styled.p`
  ${({ theme }) => theme.typography.bodySmNormal};
  color: ${({ theme }) => theme.palette.onBack};
  margin-bottom: ${({ theme }) => theme.dim[3]};

  A {
    white-space:nowrap;
    color: ${({ theme }) => theme.palette.secondary};
    text-decoration: none;
  }
`;
