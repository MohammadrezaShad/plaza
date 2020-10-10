import React from 'react'
import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types'

import {
    Wrapper,
    Head,
    List,
    Item,
    ItemLink,
    Text
} from './most-searches.styled'
import Paths from '../../../../../../../../utils/paths';

const MostSearches = (props) => {
    const {t}=useTranslation()

    return (
        <Wrapper>
            <Head>{t("mostSearches")}</Head>
            <List>
                <Item>
                    <ItemLink to={Paths.home.getPath()}>
                        <Text>سامسونگ</Text>
                    </ItemLink>
                </Item>
                <Item>
                    <ItemLink to={Paths.home.getPath()}>
                        <Text>aux</Text>
                    </ItemLink>
                </Item>
                <Item>
                    <ItemLink to={Paths.home.getPath()}>
                        <Text>شارژر دیواری</Text>
                    </ItemLink>
                </Item>
            </List>
            
        </Wrapper>
    )
}

MostSearches.propTypes = {

}

export default MostSearches
