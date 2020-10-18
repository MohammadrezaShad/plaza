import React from "react";
import { useTranslation } from "react-i18next";

import { 
    Wrapper, 
    Container 
} from "./main-layout.styled";
import Header from "./header";

const MainLayout = ({ children }) => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Header />
      <Container>
        <h1>mobile {t("title")}</h1>
        {children}
      </Container>
    </Wrapper>
  );
};

export default MainLayout;
