import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logOutUserOnTokenExpiration } from '../../redux/actions/authActions'
import { withRouter } from "react-router-dom";
import { showNotification } from '../../util/notifications/NotificationUtil';
import kwaba from '../../icons/logo.png'
import './Navbar.scss'
const Navbar = ({ history }) => {

    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const handleLogOut = () => {
        dispatch(logOutUserOnTokenExpiration())
        history.push('/login')
        showNotification('success','Successfully logged out')
    }

    const getInitialOfLoggedInUser = user => {
        if (user && user.fullName) {
            let fullName = user.fullName
            fullName = fullName.charAt(0).toUpperCase() + fullName.substr(1);
            if (fullName.trim().length > 4) {
                return fullName.substr(0, 4)
            }
            return fullName;
        }
        return user && user.fullName
    }

    const exclusiveToOtherUsers = () => {
        return (<Fragment>
            <li className="nav-item d-flex align-items-center px-3">
                <Link className="nav-link" to='/sign-up' >Sign up</Link>
            </li>
            <li className="nav-item d-flex align-items-center">
                <Link className="btn btn-outline-light" to='/login' >Login</Link>
            </li>
        </Fragment>)
    }

    const exclusiveToLoggedInUsers = () => {
        return ( <Fragment>
            <li className="nav-item d-flex align-items-center">
                <span >Hello {getInitialOfLoggedInUser(user)}</span>
            </li>
            <li className="nav-item ml-3">
                <button  type='button' className='btn btn-outline-light' onClick={() => handleLogOut()} >Logout</button>
            </li>
        </Fragment>)
    }


    return (<nav className="navbar navbar-expand-lg navbar-light bg-purple sticky-top" >
    <div className='container'>
        <Link className="navbar-brand"  to="/">
            <h3>Kwaba</h3>
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className='navbar-nav mr-auto'>
                <li className="nav-item">
                    <Link className="nav-link" to='/rent-request/add'>Rent Request Application</Link>
                </li>
            </ul>
                <ul className='navbar-nav nav-right ml-auto'>
                   
                    { 
                        !user ?  exclusiveToOtherUsers() : exclusiveToLoggedInUsers()
                    }

                </ul>
        </div>
    </div>
</nav>)
}

export default withRouter(Navbar);