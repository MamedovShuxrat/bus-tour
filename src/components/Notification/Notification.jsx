import React, { useEffect } from 'react';
import './notification.scss';
import closeIcon from '../../assets/icons/close.svg';

const Notification = ({ setIsVisible, onNotificationCountChange }) => {
    const closeNotification = () => {
        setIsVisible(false);
    };

    const notifications = [
        "Нет новых уведомлений",
    ];

    useEffect(() => {
        onNotificationCountChange(notifications.length);
    }, [notifications, onNotificationCountChange]);

    return (
        <div className="notification">
            <div className="notification__header">
                <h3 className='notification__title'>Новые</h3>
                <button className='notification__close' onClick={closeNotification}>
                    <img width={14} height={14} src={closeIcon} alt="close Icon" />
                </button>
            </div>
            <div className="notification__content">
                {notifications.length > 0 ? (
                    notifications.map((notification, index) => (
                        <p className='notification__item' key={index}>{notification}</p>
                    ))
                ) : (
                    <p className='notification__empty'>Нет новых уведомлений</p>
                )}
            </div>
        </div>
    );
};

export default Notification;