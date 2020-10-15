import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'


const withAuth = ProtectedComponent => props => {
    const loggedIn = useSelector(state => state.user ? state.user.loggedIn : false)

    return loggedIn ? <ProtectedComponent {...props} /> : <Redirect to="/signin" />
}

export default withAuth;