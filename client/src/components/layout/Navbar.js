import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const { user } = useSelector(state => state.auth)

    const handleLogOut = () => {

    }

    const getInitialOfLoggedInUser = user => {
        if (user && user.fullName) {
            let fullName = user.fullName
            if (fullName.trim().length > 4) {
                return fullName.substr(0, 4)
            }
            return fullName;
        }
        return user && user.fullName
    }

    const exclusiveToOtherUsers = () => {
        return (<Fragment>
            <li className="nav-item d-flex align-items-center">
                <Link className="nav-link" to='/sign-up' >Sign up</Link>
            </li>
            <li className="nav-item d-flex align-items-center">
                <Link className="nav-link" to='/login' >Login</Link>
            </li>
        </Fragment>)
    }

    const exclusiveToLoggedInUsers = () => {
        return ( <Fragment>
            <li className="nav-item d-flex align-items-center">
                <span >Hello {getInitialOfLoggedInUser(user)}</span>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to='/rent-request/add'>Apply</Link>
            </li>
            <li className="nav-item ml-3">
                <button  type='button' className='btn btn-outline-light' onClick={() => handleLogOut()} >Logout</button>
            </li>
        </Fragment>)
    }


    return (<nav className="navbar navbar-expand-lg navbar-light bg-main text-white sticky-top" >
    <div className='container'>
        <Link className="navbar-brand" to="/">
            <i className='fa fa-poll'></i>
                Kwaba
            </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className='navbar-nav nav-right ml-auto'>
                   
                    { 
                        !user ?  exclusiveToOtherUsers() : exclusiveToLoggedInUsers()
                    }

                </ul>
        </div>
    </div>
</nav>)
}

export default Navbar;