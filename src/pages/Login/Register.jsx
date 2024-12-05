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
                            <input type="text" placeholder="Введите номер телефона" required />
                            <span className='login__desc'>Номер будет виден только вам. Вы сами решаете, с кем делиться своими контактами</span>
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
                    <div className="login__title">Подтверждение номера
                        телефона</div>
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
                            <button className='login__btn' onClick={() => setStep('form')}>Подтвердить</button>
                            <button className='login__btn login__btn-again'>Отправить код повторно</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    const renderForm = () => (
        <div className=" login login__form login-center">
            <div className="login__wrapper">
                <form className='form form-position'>
                    <button className='form__close'>X</button>
                    <div className="login__title">Заполните личные данные</div>
                    <input type="text" placeholder="Ваше имя" required />
                    <input type="text" placeholder="Фамилия" required />
                    <input type="email" placeholder="Электронная почта " required />
                    <button className='login__btn' onClick={() => setStep('success')}>Сохранить</button>
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
        <section className='container'>
            <div className="login">
                {step === 'main' && renderMain()}
                {step === 'confirm' && renderConfirm()}
                {step === 'form' && renderForm()}
                {step === 'success' && renderSuccess()}
            </div>
        </section>
    )
}

export default Register