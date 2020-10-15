import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

const ProfileOrders = props => {
    return (
        <div>
            <Helmet>
                <title>{process.env.REACT_APP_NAME + ' | پروفایل | سفارش ها'}</title>
            </Helmet>
            <h1>profile - orders</h1>
        </div>
    )
}

ProfileOrders.propTypes = {

}

export default ProfileOrders
