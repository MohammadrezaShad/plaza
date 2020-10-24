//import userService from '../../services/user-service'
import cartTypes from '../types/cart-types'


export const removeAll = () => {
    // TODO: send to server
    return {
        type: cartTypes.REMOVE_ALL
    }
}

export const remove = (id) => {
    // TODO: send to server
    return {
        type: cartTypes.REMOVE,
        data: {id}
    }
}

export const add = (id, title, photo, price, feature) => {

    return dispatch => {

        // TODO: send to server

        dispatch({
            type: cartTypes.ADD,
            data: {
                id,
                title,
                photo,
                price,
                feature
            }
        })
    }
}