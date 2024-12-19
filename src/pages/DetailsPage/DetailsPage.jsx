import React, { useState } from 'react'
import './detailsPage.scss'
import searchBg from '../../assets/images/search/road-2.png'
import { DETAILS__BUS } from '../../constants/busesList'
import BusCardDetails from '../../components/BusCardDetails/BusCardDetails'
import Footer from '../../components/Footer/Footer'

const DetailsPage = () => {

  return (
    <div className="search">
      <div className="search__top_wrapper">
        <div className="search__top">
          <div className='container'>
            <div className="search__bg-wrapper">
              <img className="search__bg" src={searchBg} alt="road" />
            </div>
          </div>
        </div>
      </div>
      <div className="details">
        <div className="container">
          <div className="details__inner">
            <div className="details__options">
              <div className="details__card">
                {DETAILS__BUS.map(category => (
                  <section className='search__buses' key={category.id}>
                    <div className="search__list">
                      {category.bus.map(bus => (
                        <BusCardDetails key={bus.id} bus={bus} className='bus-card-search' linkTo='/details' />
                      ))}
                    </div>
                  </section>
                ))}
              </div>
              <div className="details__order">
                <h3>Детали заказа</h3>
                <div className="details__wrapper">
                  <span  >Получение</span>
                  <p>26 декабря в 8:00</p>
                </div>
                <div className="details__wrapper">
                  <span>Возврат</span>
                  <p>26 декабря в 16:00</p>
                </div>
                <div className="details__wrapper">
                  <span  >Телефон компании для связи</span>
                  <p>8 966 666 66 66</p>
                </div>
                <div className="details__wrapper">
                  <span>Количество часов аренды </span>
                  <p>8 ч.</p>
                </div>
                <div className="details__price">
                  <span>Стоимость:</span>
                  <p>18 000 ₽</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default DetailsPage