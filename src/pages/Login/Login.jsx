import React, { useState } from 'react';
import './login.scss';
import Register from './Register';

const Login = () => {
    const [step, setStep] = useState('main');
    const [activeOption, setActiveOption] = useState('client')

    const handleOptionClick = (option) => {
        setActiveOption(option)
    }


    const renderMain = () => (
        <div className="login login__main login-center">
            <a className='login__btn login__btn-width' onClick={() => setStep('login')}>Войти в аккаунт</a>
            <a className='login__btn login__btn-width' onClick={() => setStep('register')}>Зарегистрироваться</a>
        </div>
    );

    const renderLogin = () => (
        <div className=" login login__form login-center">
            <div className="login__title">Авторизация</div>
            <div className="login__wrapper">
                <div className="login__options">
                    <a className={`login__options_btn ${activeOption === 'partner' ? 'active' : ''}`}
                        onClick={() => handleOptionClick('partner')}>
                        Я партнер
                    </a>
                    <a className={`login__options_btn ${activeOption === 'client' ? 'active' : ''}`}
                        onClick={() => handleOptionClick('client')} >
                        Я клиент
                    </a>
                </div>
                <form className='form'>
                    <input type="email" placeholder="Введите email" required />
                    <input type="password" placeholder="Введите пароль" required />
                    <button className='login__btn'>Войти</button>
                    <a href="#forgot-password" className="login__forgot">Забыли пароль?</a>
                </form>
            </div>
        </div>
    );



    return (
        <section className='container'>
            <div className="login">
                {step === 'main' && renderMain()}
                {step === 'login' && renderLogin()}
                {step === 'register' && <Register />}
            </div>
        </section>
    );
};

export default Login;

