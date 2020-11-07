import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Trans, useTranslation } from "react-i18next";

import GuideCardItem from './guide-card-item'

const GuideCard = ({onOpen,title}) => {
    const { t } = useTranslation();
  
    return (
        <Fragment>
            <GuideCardItem
                title={title}
                buttonText={t("plazaClubArea.addNewBuyTogether")}
                text={t("plazaClubArea.guideTextTwo")}
                buttonColor={true}
                onOpen={onOpen}
            />
        </Fragment>
    )
}

GuideCard.propTypes = {
    onOpen:PropTypes.func,
    title:PropTypes.string
}

export default GuideCard
