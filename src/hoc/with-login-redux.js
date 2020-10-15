import React from "react";
import {useSelector , useDispatch} from 'react-redux'
import { logout } from "../redux/actions/user-actions";
import Paths from "../utils/paths";
const WithLoginRedux = WrappedComponent => (props) => {

    const dispatch = useDispatch()
    const logoutHandler=()=>dispatch(logout)
    let loggedIn = useSelector(({user}) => user.loggedIn)

     loggedIn=true
    const username="محمد زاهدی شاقاجی"
    const score=2420
    const level=1
    const icon='user'
    
    let config = {};
    if (!loggedIn) {
        config = {
            href: Paths.signin.getPathAndQuery(),
            text: "وارد شوید",
            icon: "user"
        }
    } else {
        config = {
            icon: icon,
            text:username,
            score:score,
            fillColor:level || 1
        }
    }
    
    
    return <WrappedComponent {...props} {...config}  loggedIn={loggedIn} level={level}  logoutHandler={logoutHandler} />;
};

export default WithLoginRedux;