import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import Login from '../pages/Login/Login';
import SearchPage from '../pages/SearchPage/SearchPage';
import PartnersPage from '../pages/PartnersPage/PartnersPage';
import NotificationsPage from '../pages/NotificationsPage/NotificationsPage';


const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/partners' element={<PartnersPage />} />
            <Route path='/notifications' element={<NotificationsPage />} />
            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    );
};

export default Routers