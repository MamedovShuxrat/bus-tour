import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/icons/test-logo.svg'
import './header.scss'

const Header = () => {
    return (
        <div className="container  container-position">
            <header className='header'>
                <nav className='nav'>
                    <Link to="/">
                        <img width={69} height={42} src={logo} alt="logo" />
                    </Link>
                    <div className="nav__lists">
                        <Link className="nav__link" to="/notifications">
                            Уведомления
                        </Link>
                        <Link className="nav__link" to="/partners">
                            Стать партнером
                        </Link>
                        <Link className="nav__link" to="/login">
                            Войти
                        </Link>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header