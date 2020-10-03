import React from 'react'
import PropTypes from 'prop-types'
import Dialog from '../../shared/dialog'
import {connect} from 'react-redux'

const QuickView = ({user, ...props}) => {
    return (
        <Dialog {...props}>
            <div>quick view</div>
            {
                JSON.stringify(user)
            }
        </Dialog>
    )
}

QuickView.propTypes = {

}

const mapStateToProps= state => ({
    user: state.auth
})

export default connect(mapStateToProps)(QuickView)
