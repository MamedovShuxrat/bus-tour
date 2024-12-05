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
                        <img width={277} height={49} src={logo} alt="logo" />
                    </Link>
                    <div className="nav__lists">
                        <Link to="/notifications">
                            Уведомления
                        </Link>
                        <Link to="/partners">
                            Стать партнером
                        </Link>
                        <Link to="/login">
                            Войти
                        </Link>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header