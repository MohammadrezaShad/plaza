import React from 'react';
import { 
    Wrapper
} from './empty-layout.styled';

const EmptyLayout = ({children}) => {
    return (
        <Wrapper>
            {children}
            
        </Wrapper>
    )
}

export default EmptyLayout;