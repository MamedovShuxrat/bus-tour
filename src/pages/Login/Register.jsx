import React, { useState } from 'react'
import './login.scss'

const Register = () => {
    const [step, setStep] = useState('main');

    const renderMain = () => {
        return (
            <div className="login login__register login-center">
                <div className=" login login__form login-center">
                    <div className="login__title">Регистрация</div>
                    <div className="login__wrapper">
                        <form className='form'>
                            <div className="form__fields">
                                <label class="form__desc" for="email">Введите электронную почту</label>
                                <input class="form__input" type="text" id="email" name="email"
                                    placeholder="Example@mail.ru" />
                            </div>
                            <button className='login__btn' onClick={() => setStep('confirm')}>Получить код</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    const renderConfirm = () => {
        return (
            <div className="login login__register login-center">
                <div className=" login login__form login-center">
                    <div className="login__title">Подтверждение
                        элекронной почты</div>
                    <div className="login__wrapper">
                        <form className='login__confirm'>
                            <div className="login__confirm_wrapper">
                                <input type="text" className='confirm__input' />
                                <input type="text" className='confirm__input' />
                                <input type="text" className='confirm__input' />
                                <input type="text" className='confirm__input' />
                                <input type="text" className='confirm__input' />
                                <input type="text" className='confirm__input' />
                            </div>
                            <button className='login__btn' onClick={() => setStep('confirmPassword')}>Подтвердить</button>
                            <button className='login__btn login__btn-again'>Отправить код повторно</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    const renderPassword = () => (
        <div className=" login login__form login-center">
            <div className="login__title">Придумайте пароль для входа</div>
            <div className="login__wrapper">
                <form className='form'>
                    <div className="form__fields">
                        <label class="form__desc" for="confirmPass">Пароль</label>
                        <input class="form__input" type="password" id="confirmPass" name="confirmPass"
                            placeholder="·················" />
                    </div>
                    <div className="form__fields">
                        <label class="form__desc" for="confirmPass2">Повторите пароль</label>
                        <input type="password" id='confirmPass2' placeholder="·················" required />
                    </div>
                    <button className='login__btn' onClick={() => setStep('form')}>Сохранить</button>
                </form>
            </div>
        </div>
    )

    const renderForm = () => (
        <div className=" login login__form login-center">
            <div className="login__title">Заполните личные данные</div>
            <div className="login__wrapper">
                <form className='form'>
                    <div className="form__fields">
                        <label class="form__desc" for="name">Ваше имя</label>
                        <input class="form__input" type="text" id="name" name="name"
                            placeholder="Юлия" />
                    </div>
                    <div className="form__fields">
                        <label class="form__desc" for="surname">Фамилия</label>
                        <input class="form__input" type="text" id="surname" name="surname"
                            placeholder="Салтыкова-Щедрина" />
                    </div>
                    <div className="form__fields">
                        <label class="form__desc" for="email">Электронная почта</label>
                        <input class="form__input" type="text" id="email" name="email"
                            placeholder="Example@mail.ru" />
                    </div>
                    <button className='login__btn'>Сохранить</button>
                </form>
            </div>
        </div>
    )

    const renderSuccess = () => (
        <div className=" login login__form login-center">
            <div className="login__title">Вы успешно
                зарегистрировались!</div>
        </div >
    )


    return (
        <div className="login">
            <section className='container'>
                {step === 'main' && renderMain()}
                {step === 'confirm' && renderConfirm()}
                {step === 'confirmPassword' && renderPassword()}
                {step === 'form' && renderForm()}
                {step === 'success' && renderSuccess()}
            </section>
        </div>
    )
}

export default Register