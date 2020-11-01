import React from "react";
import PropTypes from "prop-types";

import { 
  Wrapper, 
  Container, 
  CardWrapper, 
  MainWrapper, 
  Layout 
} from "./club-layout.styled";
import Header from "./header";
import ProfileCard from "./profile-card";

const ClubLayout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Layout>
          <CardWrapper>
            <ProfileCard />
          </CardWrapper>
          <MainWrapper>
            {children}
          </MainWrapper>
        </Layout>
      </Container>
    </Wrapper>
  );
};

ClubLayout.propTypes = {
  children: PropTypes.node,
};

export default ClubLayout;
