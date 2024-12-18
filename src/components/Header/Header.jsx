import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/icons/test-logo.svg'
import './header.scss'
import Notification from '../Notification/Notification'

const Header = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [notificationCount, setNotificationCount] = useState(0);

    const handleNotificationCount = (count) => {
        setNotificationCount(count);
    };

    const toggleNotification = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="container  container-position">
            <header className='header'>
                <nav className='nav'>
                    <Link to="/">
                        <img width={69} height={42} src={logo} alt="logo" />
                    </Link>
                    <div className="nav__lists">
                        <div className="nav__link nav__link-notification">
                            <span className='notification-count'>{notificationCount}</span>
                            <div onClick={toggleNotification} >
                                Уведомления
                            </div>
                            {isVisible &&
                                <Notification
                                    onNotificationCountChange={handleNotificationCount}
                                    setIsVisible={setIsVisible}
                                />
                            }
                        </div>
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