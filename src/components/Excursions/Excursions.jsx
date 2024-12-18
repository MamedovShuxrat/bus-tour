import React from 'react'
import ExcursionCards from './ExcursionCards'
import './excursions.scss'

const Excursions = () => {
    return (
        <section className='excursions'>
            <div className="container">
                <div className="excursions__inner">
                    <h2 className="excursions__title">Экскурсиум</h2>
                    <ExcursionCards />
                </div>
            </div>
        </section>
    )
}

export default Excursions