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
        <div className=" login login__form login-center">
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
                    <div className=" login__main login-center login-gap">
                        <a className='login__btn login__btn-width' onClick={() => setStep('login')}>Войти в аккаунт</a>
                        <a className='login__btn login__btn-width' onClick={() => setStep('register')}>Зарегистрироваться</a>
                    </div>
                </form>
            </div>
        </div>


    );

    const renderLogin = () => (
        <div className=" login login__form login-center">
            <div className="login__title">Авторизация</div>
            <div className="login__wrapper">
                <form className='form'>
                    <div className="form__fields">
                        <label class="form__desc" for="email">Электронная почта</label>
                        <input class="form__input" type="text" id="email" name="email"
                            placeholder="Example@mail.ru" />
                    </div>
                    <div className="form__fields">
                        <label class="form__desc" for="password">Example@mail.ru</label>
                        <input type="password" id='password' placeholder="·················" required />
                    </div>
                    <button className='login__btn'>Войти</button>
                    <a href="#forgot-password" className="login__forgot">Забыли пароль?</a>
                </form>
            </div>
        </div>
    );



    return (
        <div className="login">
            <section className='container'>
                {step === 'main' && renderMain()}
                {step === 'login' && renderLogin()}
                {step === 'register' && <Register />}
            </section>
        </div>
    );
};

export default Login;

