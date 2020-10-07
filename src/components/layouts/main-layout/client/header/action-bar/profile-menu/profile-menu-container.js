import { connect } from 'react-redux'
import ProfileMenu from './profile-menu'
import { logout } from '../../../../../../../redux/actions/user-actions'

const mapStateToProps = state => ({
    loggedIn: state.user.loggedIn,
})

const mapDispatchToProps = {
    logoutHandler: logout
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileMenu)

