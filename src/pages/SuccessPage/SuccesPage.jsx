import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./successPage.scss";
import searchBg from '../../assets/images/search/road-3.png'

const SuccesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className="success">
            <div className="container">
                <div className="search__bg-wrapper">
                    <img className="search__bg" src={searchBg} alt="road" />
                    <div className="road">
                        <Link to='/search' className="road__map ">Выбор  транспорта</Link>
                        <Link to='/details' className="road__map ">Детали бронирования</Link>
                        <Link to='/payment' className="road__map ">Оплата</Link>
                        <Link to='/success' className="road__map active">Подтверждение</Link>
                    </div>
                </div>

                <div className="success__content">
                    <div className="success__card">
                        <h4 className="success__title">Бронирование № 12345678 </h4>
                        <div className="success__name">Юлия Салтыкова-Щедрина, благодарим Вас
                            за заказ и желаем приятной поездки! </div>
                        <div className="success__about">Детали заказа доступны в <a href="#">личном кабинете</a>
                        </div>
                        <Link className="success__link" to='/main'>Вернуться на главную </Link>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default SuccesPage