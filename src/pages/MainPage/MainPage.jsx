import React, { useState } from 'react'
import Footer from '../../components/Footer/Footer'
import './mainPage.scss'
import FilterDate from '../../components/FilterDate/FilterDate'
import minivanIcon from '../../assets/icons/filter/minivan.svg'
import microbusIcon from '../../assets/icons/filter/microbus.svg'
import busesIcon from '../../assets/icons/filter/buses.svg'
import allIcon from '../../assets/icons/filter/all.svg'
import arrowDownIcon from '../../assets/icons/arrow-down.svg'
import Faq from '../../components/Faq/Faq'
import Excursions from '../../components/Excursions/Excursions'
import BusCard from '../../components/BusCard/BusCard'
import Numbers from '../../components/Numbers/Numbers'

import { buses } from '../../constants/busesList'

const FILTERS = [
    {
        id: 1,
        name: "Минивэны",
        src: minivanIcon,
    },
    {
        id: 2,
        name: "Микроавтобусы",
        src: microbusIcon,
    },
    {
        id: 3,
        name: "Автобусы",
        src: busesIcon,
    },
    {
        id: 4,
        name: "Все типы",
        src: allIcon,
    },
]

const MainPage = () => {
    const [activeFilterId, setActiveFilterId] = useState(null);

    const handleFilterClick = (filterId) => {
        setActiveFilterId(filterId);
    };
    return (<>
        <main className='main'>
            <div className="main__top_wrapper">
                <div className="main__top">
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
            <div className="main__content">
                <div className="container">
                    <section className='main__buses'>
                        <h2 className="main__title">
                            Для экскурсий
                        </h2>
                        <div className="main__list">
                            {buses.map(bus => (
                                <BusCard key={bus.id} bus={bus} />
                            ))}
                        </div>
                        <div className="main__more">
                            ещё
                            <img width={13} height={24} src={arrowDownIcon} alt="arrow Down Icon" />
                        </div>
                    </section>
                    <section className='main__buses'>
                        <h2 className="main__title">
                            Для мероприятий
                        </h2>
                        <div className="main__list">
                            {buses.map(bus => (
                                <BusCard key={bus.id} bus={bus} />
                            ))}
                        </div>
                        <div className="main__more">
                            ещё
                            <img width={13} height={24} src={arrowDownIcon} alt="arrow Down Icon" />
                        </div>
                    </section>
                    <section className='main__buses'>
                        <h2 className="main__title">
                            Для вечеринок
                        </h2>
                        <div className="main__list">
                            {buses.map(bus => (
                                <BusCard key={bus.id} bus={bus} />
                            ))}
                        </div>
                        <div className="main__more">
                            ещё
                            <img width={13} height={24} src={arrowDownIcon} alt="arrow Down Icon" />
                        </div>
                    </section>
                </div>
            </div>
            <Faq />
            <Numbers />
            <Excursions />
            <Footer />
        </main>
    </>

    )
}

export default MainPage