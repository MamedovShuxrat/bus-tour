import React, { useState } from 'react'
import './searchPage.scss'
import { SEARCH__BUSES, FILTERS } from '../../constants/busesList'
import searchBg from '../../assets/images/search/road-1.png'

import FilterDate from '../../components/FilterDate/FilterDate'
import BusModels from '../../components/BusModels/BusModels'
import YearFilters from '../../components/YearFilters/YearFilters'
import SwitcherFilters from '../../components/SwitcherFilters/SwitcherFilters'
import SortOptions from '../../components/SortOptions/SortOptions'
import RangeSlider from '../../components/RangeSlider/RangeSlider'
import Footer from '../../components/Footer/Footer'
import BusCard from '../../components/BusCard/BusCard'

const SearchPage = () => {

  const [activeFilterId, setActiveFilterId] = useState(null);
  const handleFilterClick = (filterId) => {
    setActiveFilterId(filterId);
  };
  return (
    <div className="search">
      <div className="search__top_wrapper">
        <div className="search__top">
          <div className='container'>
            <div className="search__bg-wrapper">
              <img className="search__bg" src={searchBg} alt="road" />
            </div>
          </div>
          <div className="filter">
            <div className="container">
              <div className="filter__inner">
                {FILTERS.map(filter => (
                  <div
                    key={filter.id}
                    className={`filter__item ${activeFilterId === filter.id ? 'active' : ''}`}
                    onClick={() => handleFilterClick(filter.id)}
                  >
                    <img width={90} height={40} className='filter__icon' src={filter.src} alt={filter.name} />
                    <span className='filter__name'>{filter.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="filter-date">
            <div className="container">
              <FilterDate />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="search__inner">
          <div className="sidebar">
            <div className="sidebar__lists">
              <div className="sidebar__list">
                <h5 className="sidebar__title">Выберете количество мест</h5>
                <RangeSlider />
              </div>
              <div className="sidebar__list">
                <h5 className="sidebar__title">Цена за час, ₽</h5>
                <div className="sidebar__input-wrapper">
                  <input type="text" placeholder='От' />
                  <input type="text" placeholder='До' />
                </div>
              </div>
              <div className="sidebar__list">
                <h5 className="sidebar__title">Отсортировать</h5>
                <SortOptions />
              </div>
              <div className="sidebar__list">
                <h5 className="sidebar__title">Марка / Модель</h5>
                <BusModels />
              </div>
              <div className="sidebar__list">
                <h5 className="sidebar__title">Год выпуска</h5>
                <YearFilters />
              </div>
              <div className="sidebar__list">
                <h5 className="sidebar__title">Дополнительно</h5>
                <SwitcherFilters />
              </div>
              <div className="sidebar__list sidebar__list-btns">
                <div className="sidebar__buttons">
                  <button className="sidebar__btn sidebar__btn-clear">Очистить фильтры</button>
                  <button className="sidebar__btn sidebar__btn-apply">Применить</button>
                </div>
              </div>

            </div>
          </div>
          <div className="search__lists">
            {SEARCH__BUSES.map(category => (
              <section className='search__buses' key={category.id}>
                <div className="search__list">
                  {category.buses.map(bus => (
                    <BusCard key={bus.id} bus={bus} className='bus-card-search' linkTo='/details' />
                  ))}
                </div>

              </section>
            ))}

          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SearchPage