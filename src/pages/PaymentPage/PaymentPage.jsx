import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./paymentPage.scss";
import searchBg from '../../assets/images/search/road-2.png'


const PaymentPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className="payment-page">
            <div className="container">
                <div className="search__bg-wrapper">
                    <img className="search__bg" src={searchBg} alt="road" />
                    <div className="road">
                        <Link to='/search' className="road__map ">Выбор  транспорта</Link>
                        <Link to='/details' className="road__map ">Детали бронирования</Link>
                        <Link to='/payment' className="road__map active">Оплата</Link>
                        <Link to='/success' className="road__map">Подтверждение</Link>
                    </div>
                </div>
                <div className="payment-page__container">
                    <h1 className="payment-page__title">Оплата услуг</h1>
                    <p className="payment-page__description">
                        Вы можете оплатить наши услуги через ЮKassa. Пожалуйста, заполните форму ниже.
                    </p>
                    <form className="payment-page__form">
                        <div className="form-group">
                            <label htmlFor="name">Имя</label>
                            <input type="text" id="name" placeholder="Введите ваше имя" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" id="email" placeholder="Введите ваш e-mail" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="amount">Сумма оплаты (₽)</label>
                            <input type="number" id="amount" placeholder="Введите сумму" required />
                        </div>
                        <button type="submit" className="payment-page__button">
                            Перейти к оплате
                        </button>
                    </form>
                    <div className="payment-page__footer">
                        <p>
                            Платежи обрабатываются через <strong>ЮKassa</strong>. Все данные защищены.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;
