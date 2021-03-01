import React from 'react'

const Nav = ({ mainPage }) => {
    const renderLoginButton = () => {
        if (mainPage === true) {
            return <a href="/register" id="login-btn"><span>Entrar</span></a>
        }
    }

    return (
        <nav>
            <div className="nav-left-align">
                <a href="/" className="header-item nav-logo">E-food</a>
            </div>
            <div className="nav-right-align">
                <a href="/" className="header-item">Home</a>
                <a href="/" className="header-item">payload</a>
                <a href="/" className="header-item">payload</a>
                {renderLoginButton()}
            </div>
        </nav>
    )
}

export default Nav