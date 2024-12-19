import React from 'react'
import { Link } from 'react-router-dom'
import './orderingBus.scss'

const OrderingBus = () => {
    return (
        <form className='forms'>
            <h4 className="forms__title">Введите данные контактнoго лица</h4>
            <div className="forms__wrapper">
                <div className="forms__inputs">
                    <label htmlFor="name" className='forms__fields'>
                        <span>Имя</span>
                        <input id='name' type="text" placeholder='Юлия' />
                    </label>
                    <label htmlFor="surname" className='forms__fields'>
                        <span>Фамилия</span>
                        <input id='surname' type="text" placeholder='Салтыкова-Щедрина' />
                    </label>
                    <label htmlFor="phone" className='forms__fields'>
                        <span>Телефон</span>
                        <input id='pnone' type="text" placeholder='+7 905 555 55 55' />
                    </label>
                    <label htmlFor="mail" className='forms__fields'>
                        <span>Почта</span>
                        <input id='mail' type="text" placeholder='Example@mail.ru' />
                    </label>
                    <label htmlFor="adress" className='forms__fields forms__fields-width'>
                        <span>Место подачи автобуса</span>
                        <input id='adress' type="text" placeholder='г. Москва, улица Шарикоподшипниковская, д 15, к 2' />
                    </label>
                </div>
                <div className="forms__actions">
                    <label htmlFor="message" className='forms__fields forms__fields-width'>
                        <span>Комментарий</span>
                        <textarea id="message" name="message"
                        ></textarea>
                    </label>
                    <Link className='forms__btn' to='/payment'>Заказать автобус</Link>
                </div>
            </div>

        </form>
    )
}

export default OrderingBus