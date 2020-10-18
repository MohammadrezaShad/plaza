import React from 'react'

import {
    List,
    Item,
    Text,
    Category,
    ItemLink
} from './results-list.styled'
import Paths from '../../../../../utils/paths'

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
