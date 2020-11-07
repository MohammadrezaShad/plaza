import React, { useState } from "react";
import PropTypes from "prop-types";
import { Trans, useTranslation } from "react-i18next";

import { StyledWrapper, StyledContent, StyledNumber } from "./guide-card.styled";
import GuideCardItem from "../../../../../../shared/guide-card/guide-card-item";
import BuyGuideCard from "../../../../../../shared/guide-card";

import BuyTogether from "../../../../../../dialogs/club/buy-together";

const GuideCard = ({ point = 10000, nextLevelPoint = 15000 }) => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false)

  const onClose = () => {
    setShowModal(false)
  }
  const onOpen = () => {
    setShowModal(true)
  }

  return (
    <StyledWrapper>
      <GuideCardItem
        title={t("plazaClubArea.guideTitleOne")}
        buttonText={t("increaseLevel")}>
        <Trans i18nKey="plazaClubArea.guideTextOne"
          values={{ pointToNext: nextLevelPoint - point }}
          components={[<StyledNumber></StyledNumber>]}>
        </Trans>
      </GuideCardItem>
      <StyledContent>
        <BuyGuideCard onOpen={onOpen} title={t("plazaClubArea.guideTitleTwo")} />
      </StyledContent>
      <StyledContent $display="responsive">
        <BuyGuideCard onOpen={onOpen} title={t("plazaClubArea.guideTitleTwoResponsive")} />
      </StyledContent>
      <BuyTogether open={showModal} onClose={onClose} />
    </StyledWrapper>
  );
};

GuideCard.propTypes = {
  point: PropTypes.string,
  maxPoint: PropTypes.string,
};

export default GuideCard;
