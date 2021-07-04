import React from "react";
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import spinner from '../../icons/spinner.gif'

const Spinner = ({ loading, message }) => {
    return (<div style={loaderStyles}>
                <img src={spinner} alt='Loader' style={{ height: '100vh', width: '100%', objectFit: 'contain' }} />
                <span style={{ position: 'absolute', top: '72%' }}>{message}</span>
            </div>
    )
};

const loaderStyles = { display: 'flex', justifyContent: 'center', alignItems: 'center' }

Spinner.propTypes = {
    message: PropTypes.string.isRequired,
}

Spinner.defaultProps = {
    message: 'Loading...'
}

const mapStateToProps = ({ loading }) => ({
    loading
})

export default connect(mapStateToProps)(Spinner);