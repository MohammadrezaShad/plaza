import React from 'react'
import Paths from '../../../../../../../../utils/paths'

import {
    List,
    Item,
    Text,
    Category,
    ItemLink
} from './results-list.styled'

const ResultsList = () => {
    return (
        <List>
            <Item>
                <ItemLink to={Paths.home.getPath()}>
                <Text>جستجوی باتری در دسته</Text>
                <Category>باتری لپ تاپ</Category>
                </ItemLink>
            </Item>
            <Item>
              <ItemLink to={Paths.home.getPath()}>
                <Text>جستجوی باتری در دسته</Text>
                <Category>باتری گوشی</Category>
              </ItemLink>
            </Item>
            <Item>
              <ItemLink to={Paths.home.getPath()}>
                <Text>جستجوی باتری در دسته</Text>
                <Category>باتری قلمی</Category>
              </ItemLink>
            </Item>
        </List>
    )
}

export default ResultsList
