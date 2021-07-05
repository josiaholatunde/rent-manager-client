import { showNotification } from '../../util/notifications/NotificationUtil'
import { Route, Redirect } from 'react-router';
import React from 'react';
import { connect } from 'react-redux'

 const PrivateRoute = ({ isUserLoggedIn, component: Component, ...rest }) => {
    if (!isUserLoggedIn) {
        showNotification('You are not authorized to access this route');
    }

    return (<Route {...rest} render={props => {
        return isUserLoggedIn ? (
            <Component  {...props} />
        ): (
            <Redirect to={
                {
                    pathname: '/login',
                    state: props.location
                }
            } />)
    }} />)
}

const mapStateToProps = ({ auth: { user } }) => ({
    isUserLoggedIn: user !== null
})
export default connect(mapStateToProps)(PrivateRoute)