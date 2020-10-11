import React from "react";
import PropTypes from "prop-types";

import {
    Wrapper,
    Title,
    List,
    Item,
    Text,
    Icon,
    IconRight,
    ItemWrap
} from './footer-navigation.styled'
import IconProvider from "../../../../../../providers/icon/icon-provider";


const FooterNavigation = ({title,items,arrow,dir}) => {

  return (
    <Wrapper>
      <Title>{title}</Title>
      <List>
        {items.map((item,index)=>{
          return (
            <Item key={index} $dir={dir}  $arrow={arrow}>
              <ItemWrap $arrow={arrow}>
            <IconRight as={IconProvider} icon="chevron-left" size="6px" $arrow={arrow}/>
            <Text>{item}</Text>
            <Icon as={IconProvider} icon="chevron-left" size="6px" $arrow={arrow}/>
             </ItemWrap>
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
