import {
    Cookies
} from 'react-cookie'

import cartTypes from '../types/cart-types'
import cookiesName from '../../constants/cookies-name'

const cookies = new Cookies()
const cartCookie = cookies.get(cookiesName.CART)

export const parseCartReducerInitialData = (value) => {
    let output = {
        items: [],
        payablePrice: 0
    }

    if (value) {
        if (typeof (value) == 'string') {
            output = JSON.parse(value);
        } else {
            output = value
        }
    }

    return output
}

const cartReducer = (state = parseCartReducerInitialData(cartCookie), action) => {
    switch (action.type) {

        case cartTypes.ADD:
            {
                const {
                    id, title, photo, feature, price
                } = action.data
                const items = state.items
                const payablePrice = state.payablePrice += price
                const item = items.find(item => item.id == id)

                if (item) {
                    item.count++;
                } else {
                    state.items.push({
                        id: id,
                        title: title,
                        photo: photo,
                        feature: feature,
                        price: price,
                        count: 1
                    })
                }
                const finalState = {
                    ...state,
                    items: items,
                    payablePrice: payablePrice

                }

                cookies.set(cookiesName.CART, JSON.stringify(finalState))

                return finalState
            }

        case cartTypes.REMOVE_ALL:
            cookies.remove(cookiesName.CART);
            return {
                ...state,
                items: [],
                payablePrice: 0
            };

        case cartTypes.REMOVE:
            {
                const { id } = action.data
                const items = state.items
                const index = items.findIndex(item => item.id == id)
                let payablePrice = state.payablePrice

                if (index != -1) {
                    const item = items[index];
                    payablePrice -= (item.price * item.count)
                    items.splice(index, 1)
                }

                
                const finalState = {
                    ...state,
                    items: items,
                    payablePrice: payablePrice

                }

                cookies.set(cookiesName.CART, JSON.stringify(finalState))

                return finalState
            }

        default:
            return state
    }
}

export default cartReducer