import React from 'react'
import './excursionCards.scss'
import kolomnaImg from '../../assets/images/excursions/kolomna-1.png'
import gjelImg from '../../assets/images/excursions/gzhel.png'
import memoryImg from '../../assets/images/excursions/memory.png'
import muzejImg from '../../assets/images/excursions/Muzej.png'
import spaceIcon from '../../assets/icons/excursions/space.svg'
import mapIcon from '../../assets/icons/excursions/map.svg'
const CARDS_DATA = [
    {
        id: 1,
        grade: '2 - 11 класс',
        hours: '5 часов',
        imgSrc: kolomnaImg,
        address: {
            city: 'Коломна, МО',
            link: '#',
            imgSrc: mapIcon
        },
        content: {
            name: 'Коломна',
            title: 'Музей Коломенской пастилы и Школа ремёсел',
            subtitle: 'Экскурсия в один из самых атмосферных городов Подмосковья',
            tabs: ['Экскурсия', 'Чаепитие', 'Интерактив', 'Дегустация'],
            price: 'от 3 500 ₽',
            imgSrc: spaceIcon
        },
    },
    {
        id: 2,
        grade: '1 - 11 класс',
        hours: '2 часа',
        imgSrc: gjelImg,
        address: {
            city: 'с. Гжель, МО',
            link: '#',
            imgSrc: mapIcon
        },
        content: {
            name: 'Гжельский завод художественной росписи ',
            title: 'Синь России - экскурсия в Гжель',
            subtitle: 'Как создаётся знаменитая гжельская посуда?',
            tabs: ['Экскурсия', 'Мастер-класс', 'Чаепитие', 'Зоопарк'],
            price: 'от 2 500 ₽',
            imgSrc: spaceIcon
        },
    },

    {
        id: 3,
        grade: '2 - 11 класс',
        hours: '3 часа',
        imgSrc: memoryImg,
        address: {
            city: 'Минское шоссе, МО',
            link: '#',
            imgSrc: mapIcon
        },
        content: {
            name: 'Музей "Дорога памяти"',
            title: 'Музей Дорога памяти-1418',
            subtitle: 'Погружение в историю Великой Отечественной войны с интерактивными элементами за 1418 шагов',
            tabs: ['Экскурсия', 'Храм'],
            price: 'от 2 650 ₽',
            imgSrc: spaceIcon
        },
    },

    {
        id: 4,
        grade: '1 - 11 класс',
        hours: '1.5 часа',
        imgSrc: muzejImg,
        address: {
            city: 'шоссе Братовщина-Ельдигино, МО',
            link: '#',
            imgSrc: mapIcon
        },
        content: {
            name: 'Музей сырка Б.Ю. Александров',
            title: 'Музей истории молока ',
            subtitle: 'Вкусная и познавательная экскурсия на производство глазированных сырков',
            tabs: ['Экскурсия', 'Дегустация', 'Мастер-класс'],
            price: 'от 3 000 ₽',
            imgSrc: spaceIcon
        },
    },
];


const ExcursionCards = () => {
    return (
        <div className="cards__wrapper">
            {CARDS_DATA.map(card => (
                <div className='card'>
                    <div key={card.id} className="card__visual" style={{ background: `url(${card.imgSrc}) center/cover no-repeat`, }}>
                        <div className="card__wrapper">
                            <div className="card__desc card__desc-grade">{card.grade}</div>
                            <div className="card__desc card__desc-hours">{card.hours}</div>
                        </div>
                        <div className="card__adress">
                            <a href={card.address.link} className="card__adress-link">
                                <img width={10} height={10} src={card.address.imgSrc} alt="map icon" />
                                <span> {card.address.city}</span>
                            </a>
                        </div>
                    </div>
                    <div className="card__content">
                        <div>
                            <div className="card__space">
                                <img src={card.content.imgSrc} alt={card.content.name} />
                                <span>{card.content.name}</span>
                            </div>
                        </div>
                        <h4 className="card__title">
                            {card.content.title}
                        </h4>
                        <p className="card__subtitle">
                            {card.content.subtitle}
                        </p>
                        <div className="card__tabs">
                            {card.content.tabs.map((tab, index) => (
                                <div key={index} className="card__tab">{tab}</div>

                            ))}
                        </div>
                        <div className="card__bottom">
                            <p className="card__price">{card.content.price}</p>
                            <a href='#' className="card__btn">Подробнее</a>
                        </div>
                    </div>
                </div>
            ))
            }

        </div >
    )
}

export default ExcursionCards