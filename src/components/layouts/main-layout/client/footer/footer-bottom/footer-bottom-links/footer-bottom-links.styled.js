import styled from "styled-components";

const Store = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.dim[4]};
`;

const StoreLink = styled.a`
  display: inline-flex;
  &:not(:last-child) {
    margin-left: ${({ theme }) => theme.dim[2]};
  }
`;

const StoreImage = styled.img`
  display: inline-flex;
  width: 120px;
  height: 40px;
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.dim[3]};
`;

const SocialMediaLink = styled.a`
  display: inline-flex;
  &:not(:last-child) {
    margin-left: ${({ theme }) => theme.dim[4]};
  }
`;

export {
    Store,
    StoreLink,
    StoreImage,
    SocialMedia,
    SocialMediaLink
}