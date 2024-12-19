import React, { useState, useEffect } from 'react'
import Footer from '../../components/Footer/Footer'
import './mainPage.scss'
import FilterDate from '../../components/FilterDate/FilterDate'

import arrowDownIcon from '../../assets/icons/arrow-down.svg'
import Faq from '../../components/Faq/Faq'
import Excursions from '../../components/Excursions/Excursions'
import BusCard from '../../components/BusCard/BusCard'
import Numbers from '../../components/Numbers/Numbers'

import { BUS_CATEGORIES, FILTERS } from '../../constants/busesList'



const MainPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    const [activeFilterId, setActiveFilterId] = useState(null);
    const [visibleCount, setVisibleCount] = useState({})

    const handleShowMore = (categoryId) => {
        console.log("Clicked category:", categoryId)
        setVisibleCount(prevCounts => ({
            ...prevCounts,
            [categoryId]: (prevCounts[categoryId] || 4) + 4
        }));
    };

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
                    {BUS_CATEGORIES.map(category => (
                        <section className='main__buses' key={category.id}>
                            <h2 className="main__title">
                                {category.title}
                            </h2>
                            <div className="main__list">
                                {category.buses.slice(0, visibleCount[category.id] || 4).map(bus => (
                                    <BusCard key={bus.id} bus={bus} linkTo='/search' />
                                ))}
                            </div>
                            {(visibleCount[category.id] || 4) < category.buses.length && (
                                <div className="main__more" onClick={() => handleShowMore(category.id)}>
                                    ещё
                                    <img width={13} height={24} src={arrowDownIcon} alt="arrow Down Icon" />
                                </div>
                            )}
                        </section>
                    ))}
                </div>
            </div>
            <Faq />
            <Excursions />
            <Numbers />
            <Footer />
        </main>
    </>

    )
}

export default MainPage