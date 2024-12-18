import React, { useState } from 'react'
import './searchPage.scss'
import { FILTERS } from '../../constants/busesList'
import searchBg from '../../assets/images/search/road-1.png'

import FilterDate from '../../components/FilterDate/FilterDate'
import BusModels from '../../components/BusModels/BusModels'

const SearchPage = () => {
  const [value, setValue] = useState(50);

  const handleSliderChange = (e) => {
    setValue(Number(e.target.value));
  };
  const [activeFilterId, setActiveFilterId] = useState(null);
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
                <div className="range">
                  <div className="range__line">
                    <div
                      className="range__tooltip"
                      style={{ left: `${value}%` }}
                    >
                      {value}
                    </div>
                    <div
                      className="range__blue-line"
                      style={{ width: `${value}%` }}
                    ></div>
                  </div>
                  <input
                    type="range"
                    className="range__input"
                    min="0"
                    max="100"
                    value={value}
                    onChange={handleSliderChange}
                  />
                  <div className="range__summ">
                    <span className="range__total_sum">{value} </span>
                  </div>
                </div>
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
                <ul className="sidebar__sort-wrapper">
                  <li className='sidebar__sort-item'>По убыванию</li>
                  <li className='sidebar__sort-item'>По возрастанию</li>
                  <li className='sidebar__sort-item active'>По популярности</li>
                  <li className='sidebar__sort-item'>Без сортировки</li>
                </ul>
              </div>
              <div className="sidebar__list">
                <h5 className="sidebar__title">Марка / Модель</h5>
                <BusModels />
              </div>
              <div className="sidebar__list">
                1
              </div>
            </div>
          </div>
          <div className="search__lists">

          </div>
        </div>
      </div>

    </div>
  )
}

export default SearchPage