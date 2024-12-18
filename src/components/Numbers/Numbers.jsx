import React from 'react'
import reviews from '../../assets/images/numbers/chat.png'
import './numbers.scss'

const Numbers = () => {
    return (
        <section className='numbers'>
            <div className="container">
                <div className="numbers__inner">
                    <h2 className="numbers__title">БУС в цифрах</h2>
                    <div className="numbers__cards">
                        <div className="numbers__card numbers__card-1">
                            <div className="numbers__wrapper">
                                <img src={reviews} alt="reviews " width={144} height={122} />
                                <p>1503</p>
                                <span>Положительных
                                    отзыва</span>
                            </div>
                        </div>
                        <div className="numbers__card numbers__card-2">
                            <div className="numbers__wrapper">
                                <p>924000</p>
                                <span>Общее расстояние
                                    в километрах</span>
                            </div>
                        </div>
                        <div className="numbers__card numbers__card-3">
                            <div className="numbers__wrapper">
                                <p>1509</p>
                                <span>Пассажиров</span>
                            </div>
                        </div>
                        <div className="numbers__card numbers__card-4">
                            <div className="numbers__wrapper">
                                <p>7</p>
                                <span> Перевезенных
                                    крокодилов</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Numbers