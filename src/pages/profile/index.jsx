import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import withAuth from '../../hoc/with-auth'

const Profile = ({route}) => {
    console.log(route);
    return (
        <div>
            <Helmet>
                <title>{process.env.REACT_APP_NAME + ' | پروفایل | صفحه اصلی'}</title>
            </Helmet>
            <h1>profile</h1>
        </div>
    )
}

Profile.propTypes = {

}

export default withAuth(Profile)
