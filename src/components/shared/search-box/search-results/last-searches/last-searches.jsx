import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from "react-i18next";

import {
    Wrapper,
    Head,
    List,
    Item,
    ItemLink,
    Icon,
    Text
} from './last-searches.styled'
import IconProvider from '../../../../../providers/icon/icon-provider'
import Paths from '../../../../../utils/paths';

const LastSearches = props => {
    const { t } = useTranslation();

    return (
        <Wrapper>
            <Head>{t("lastSearches")}</Head>
            <List>
                <Item>
                    <ItemLink to={Paths.home.getPath()}>
                    <Icon as={IconProvider} icon="recently" size="20px" />
                    <Text>hdmi</Text>
                    </ItemLink>
                </Item>
                <Item>
                    <ItemLink to={Paths.home.getPath()}>
                    <Icon as={IconProvider} icon="recently" size="20px" />
                    <Text>گلس سامسونگ A50</Text>
                    </ItemLink>
                </Item>
                <Item>
                    <ItemLink to={Paths.home.getPath()}>
                    <Icon as={IconProvider} icon="recently" size="20px" />
                    <Text>موس گیمینگ</Text>
                    </ItemLink>
                </Item>
            </List>
        </Wrapper>
    )
}

LastSearches.propTypes = {

}

export default LastSearches
