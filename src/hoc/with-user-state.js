import React from "react";
import {useSelector , useDispatch} from 'react-redux'
import { logout } from "../redux/actions/user-actions";

const WithUserState = WrappedComponent => props => {
    const dispatch = useDispatch()
    const logoutHandler = () => dispatch(logout())
    const loggedIn = useSelector(({user}) => user.loggedIn)
    const {firstName, lastName, level, point, wholeSalingName, wholeSalingState} = useSelector(({user}) => user.detail ? user.detail : {})
    
    
    return <WrappedComponent 
                {...props} 
                loggedIn={loggedIn} 
                firstName={firstName} 
                lastName={lastName} 
                userLevel={level} 
                userPoint={point}
                wholeSalingName={wholeSalingName}
                wholeSalingState={wholeSalingState}
                logoutHandler={logoutHandler} 
                />;
};

export default WithUserState;