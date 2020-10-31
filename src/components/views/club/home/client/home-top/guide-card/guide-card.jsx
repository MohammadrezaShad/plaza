import React, { useState } from "react";
import PropTypes from "prop-types";
import { Trans, useTranslation } from "react-i18next";

import { StyledWrapper, StyledNumber } from "./guide-card.styled";
import GuideCardItem from "./guide-card-item";
import BuyTogether from "../../../../../../dialogs/club/buy-together";

const GuideCard = ({ point = 10000, nextLevelPoint = 15000 }) => {
  const { t } = useTranslation();
  const [showModal, setshowModal] = useState(false)
  const btnClick = () => {
    setshowModal(!showModal)
  }
  return (
    <StyledWrapper>
      <GuideCardItem
        title={t("plazaClubArea.guideTitleOne")}
        buttonText={t("increaseLevel")}
        text={t("plazaClubArea.guideTextOne", { point: "2550" })} >
        فقط <StyledNumber>{nextLevelPoint - point}</StyledNumber>
      </GuideCardItem>

      <GuideCardItem
        title={t("plazaClubArea.guideTitleTwo")}
        buttonText={t("plazaClubArea.addNewBuyTogether")}
        text={t("plazaClubArea.guideTextTwo")}
        buttonColor={true}
        btnClick={btnClick}
      />
      <BuyTogether open={showModal||false} onClose={setshowModal} />
    </StyledWrapper>
  );
};

GuideCard.propTypes = {
  point: PropTypes.string,
  maxPoint: PropTypes.string,
};

export default GuideCard;
