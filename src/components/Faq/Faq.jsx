import React from 'react'
import arrowDown from '../../assets/icons/arrow-down.svg'
import './faq.scss'

const Faq = () => {
    return (
        <section className='faq'>
            <div className="container">
                <div className="faq__inner">
                    <h2 className="faq__title">Часто задаваемые вопросы</h2>
                    <details class="accordion" name="faq">
                        <summary class="accordion__summary">
                            <img src={arrowDown} alt="arrow down" class="accordion__icon accordion__icon-arrow" />
                            Я заказал аренду автобуса, какие мои дальнейшие действия?
                        </summary>
                        <div class="accordion__content" id="faq" role="definition">
                            <p class="accordion__text">
                                Подтверждение заказа: Убедитесь, что вы получили подтверждение от компании об аренде автобуса, включая дату, время и место отправления.
                                Подумайте о том, что вам нужно взять с собой, например, билеты, документы или личные вещи.
                                После поездки не забудьте оставить отзыв о качестве услуг, чтобы помочь другим пользователям и компании улучшить сервис.
                            </p>
                        </div>
                    </details>
                    <details class="accordion" name="faq">
                        <summary class="accordion__summary">
                            <img src={arrowDown} alt="arrow down" class="accordion__icon accordion__icon-arrow" />
                            Какие способы оплаты доступны?
                        </summary>
                        <div class="accordion__content" id="faq" role="definition">
                            <p class="accordion__text">
                                Оплата с помощью кредитной или дебетовой карты (Visa, MasterCard и др.).<br />
                                <br />Возможность оплаты наличными в день поездки.<br />
                                <br />Использование систем электронных платежей, таких как PayPal, Яндекс.Деньги, WebMoney и другие.<br />
                            </p>
                        </div>
                    </details>
                    <details class="accordion" name="faq">
                        <summary class="accordion__summary">
                            <img src={arrowDown} alt="arrow down" class="accordion__icon accordion__icon-arrow" />
                            Как мне связаться с транспортной компание?
                        </summary>
                        <div class="accordion__content" id="faq" role="definition">
                            <p class="accordion__text">
                                Позвоните по указанным на сайте компании телефонам. Так же через WhatsApp.
                                Вы можете отправить запрос на электронную почту компании.
                            </p>
                        </div>
                    </details>
                    <a href="#" className="faq__support">Остались вопросы? Нажмите сюда</a>
                </div>
            </div>
        </section>
    )
}

export default Faq