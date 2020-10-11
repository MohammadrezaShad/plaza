import React from 'react'
import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types'

import {
    Wrapper,
    Head,
    List,
    Item,
    ItemLink,
    Text,
    Icon
} from './most-searched-terms.styled'
import Paths from '../../../../../../../../utils/paths';
import IconProvider from '../../../../../../../../providers/icon/icon-provider';

const MostSearchedTerms = ({term}) => {
    const {t}=useTranslation()

    return (
        <Wrapper>
            <Head>{t("mostSearchedTerms")}{term}</Head>
            <List>
                <Item>
                    <ItemLink to={Paths.home.getPath()}>
                        <Icon as={IconProvider}  icon="search" size="20px"  />
                        <Text>باتری اورجینال ال جی</Text>
                    </ItemLink>
                </Item>
                <Item>
                    <ItemLink to={Paths.home.getPath()}>
                        <Icon as={IconProvider}   icon="search" size="20px" />
                        <Text>باتری اورجینال لنوو</Text>
                    </ItemLink>
                </Item>
                <Item>
                    <ItemLink to={Paths.home.getPath()}>
                    <Icon as={IconProvider}  icon="search" size="20px"  />
                        <Text>باتری اورجینال اچ تی سی</Text>
                    </ItemLink>
                </Item>
            </List>
            
        </Wrapper>
    )
}

MostSearchedTerms.propTypes = {

}

export default MostSearchedTerms
