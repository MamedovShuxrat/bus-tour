import React from "react";
import "./partnersPage.scss";

const PartnerPage = () => {
    return (
        <div className="partner-page">
            <div className="container">
                <div className="partner-page__inner">
                    <div className="partner-page__content">
                        <h1 className="partner-page__title">Стать партнёром</h1>
                        <p className="partner-page__description">
                            Мы работаем над этим разделом. Скоро здесь появится вся необходимая информация о том, как стать нашим партнёром.
                        </p>
                        <div className="partner-page__icon">
                            {/* <img
                        src="/images/under-construction.svg"
                        alt="Раздел в разработке"
                        className="partner-page__image"
                    /> */}
                        </div>
                        <p className="partner-page__footer">
                            Если у вас есть вопросы, свяжитесь с нами по электронной почте:{" "}
                            <a href="bus@example.com">bus@example.com</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnerPage;
