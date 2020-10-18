import { connect } from 'react-redux'
import ProfileMenu from './profile-menu'
import { logout } from '../../../../../../../redux/actions/user-actions'

const mapStateToProps = state => ({
    loggedIn: state.user ? state.user.loggedIn : false,
    firstName: state.user.detail  ? state.user.detail.firstName : null,
    lastName: state.user.detail  ? state.user.detail.lastName : null,
    userLevel: state.user.detail ? state.user.detail.level : null,
    userPoint: state.user.detail ? state.user.detail.point : null
})

const mapDispatchToProps = {
    logoutHandler: logout
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileMenu)

