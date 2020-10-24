import React from 'react'
import { useSelector } from 'react-redux'

const WithCartState = WrapperComponent => props => {
    const state = useSelector(state => state.cart)
    const { items, payablePrice } = state;

    return <WrapperComponent 
                {...props}
                items={items}
                payablePrice={payablePrice}
                />
}


export default WithCartState