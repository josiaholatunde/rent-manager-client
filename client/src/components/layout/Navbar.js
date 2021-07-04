import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const handleLogOut = () => {

    }


    return (<nav className="navbar navbar-expand-lg navbar-light bg-main text-white sticky-top" >
    <div className='container'>
        <Link className="navbar-brand" to="/">
            <i className='fa fa-poll'></i>
                Kwaba
            </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className='navbar-nav nav-right ml-auto'>
                    <Fragment>
                        <li className="nav-item ml-3">
                            <button  type='button' className='btn btn-outline-light' onClick={() => handleLogOut()} >Logout</button>
                        </li>
                    </Fragment>
                    <li className="nav-item d-flex align-items-center">
                        <Link className="nav-link" to='/sign-up' >Sign up</Link>
                    </li>
                    <li className="nav-item d-flex align-items-center">
                        <Link className="nav-link" to='/login' >Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/rent-request/add'>Apply</Link>
                    </li>
                </ul>
        </div>
    </div>
</nav>)
}

export default Navbar;