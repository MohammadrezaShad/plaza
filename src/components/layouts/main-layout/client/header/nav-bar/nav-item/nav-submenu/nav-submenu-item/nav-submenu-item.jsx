import React from 'react'
import PropTypes from 'prop-types'

import {
    StyledWrapper,
    StyledCol
} from './nav-submenu-item.styled'
import NavSubmenuItems from './nav-submenu-items'

function NavSubmenuItem({list}) {
    

    return (
        <StyledWrapper>
            {
                list.map((data, index) => (
                    <StyledCol key={index}>
                        {
                            data.items instanceof Array
                            ?
                            data.items.map((data, index) => (
                                <NavSubmenuItems key={index} title={data.title} url={data.url} list={data.items || []} />
                            ))
                            :
                            null
                        }
                    </StyledCol>
                ))
            }
        </StyledWrapper>
    )
}

NavSubmenuItem.propTypes = {
    list: PropTypes.array
}

export default NavSubmenuItem

