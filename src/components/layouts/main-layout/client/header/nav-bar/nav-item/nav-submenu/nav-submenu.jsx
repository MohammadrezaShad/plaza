import React, { useState } from 'react'
import PropTypes from 'prop-types'

import {
    StyledWrapper,
    StyledNav,
    StyledItem,
    StyledButton,
    StyledContent
} from './nav-submenu.styled'

const NavSubmenu = ({list}) => {
    list = [
        {
            selected:true,
            title:"کالای دیجیتال"
        },
        {
            title:"لوازم و تجهیزات"
        },
        {
            title: "هنر، فیلم و موسیقی"
        }
    ]
    const [finalList, setFinalList] = useState(list)
    

    const mouseenterHandler = (index) => {
        let list = [...finalList];
        list.forEach(element => {
            element.selected = false;
        });
        
        list[index].selected = true;

        setFinalList(list);
    }

    return (
        <StyledWrapper>
            <StyledNav>
            {
                finalList.map((data,index) => (
                <StyledItem key={index} onMouseEnter={() => mouseenterHandler(index)} selected={!!data.selected}>
                    <StyledButton>{data.title}</StyledButton>
                </StyledItem>
                ))
            }
            </StyledNav>
            {
                finalList.map((data,index) => (
                <StyledContent key={index} selected={!!data.selected}>
                    
                </StyledContent>
                ))
            }
                
        </StyledWrapper>
    )
}

NavSubmenu.propTypes = {
    list: PropTypes.array
}

export default NavSubmenu
