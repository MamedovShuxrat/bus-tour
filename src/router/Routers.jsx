import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import WellcomePage from '../pages/WellcomePage/WellcomePage';
import Login from '../pages/Login/Login';
import MainPage from '../pages/MainPage/MainPage';
import PartnersPage from '../pages/PartnersPage/PartnersPage';
import SearchPage from '../pages/SearchPage/SearchPage';
import DetailsPage from '../pages/DetailsPage/DetailsPage';


const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<WellcomePage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/main' element={<MainPage />} />
            <Route path='/partners' element={<PartnersPage />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/details' element={<DetailsPage />} />
            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    );
};

export default Routers