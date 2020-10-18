import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Unauthorized from '../components/shared/unauthorized'


const withAuth = ProtectedComponent => props => {
    const loggedIn = useSelector(state => state.user ? state.user.loggedIn : false)

    return loggedIn ? <ProtectedComponent {...props} /> : <Unauthorized />
}

export default withAuth;