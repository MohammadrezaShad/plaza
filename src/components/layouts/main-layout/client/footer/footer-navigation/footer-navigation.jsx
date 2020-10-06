import React from "react";
import PropTypes from "prop-types";

import {
    Wrapper,
    Title,
    List,
    Item,
    Text,
    Icon
} from './footer-navigation.styled'
import IconProvider from "../../../../../../providers/icon/icon-provider";


const FooterNavigation = ({title,items,arrow,exception,dir}) => {

  return (
    <Wrapper>
      <Title>{title}</Title>
      <List>
        {items.map((item,index)=>{
          return (
            <Item key={index} $exception={exception} $dir={dir}>
            <Text>{item}</Text>
            <Icon as={IconProvider} icon="chevron-left" size="6px" $arrow={arrow}/>
            </Item>
          )
        })}
      </List>
    </Wrapper>
  );
};

FooterNavigation.propTypes = {
arrow:PropTypes.bool,
items:PropTypes.array,
title:PropTypes.string,
dir:PropTypes.string,
exception:PropTypes.bool
};

export default FooterNavigation;
