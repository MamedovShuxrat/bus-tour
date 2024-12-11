import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './mainPage.scss'

import busImg from '../../assets/images/bus-test.png'
import peopleImg from '../../assets/images/people-bg.png'

const MainPage = () => {
    const navigate = useNavigate()
    const [imgClass, setImgClass] = useState('main__img')
    const [titleClass, setTitleClass] = useState('main__title visible')
    const [isPeopleVisible, setIspeopleVisible] = useState(false)


    const handleClickGo = (e) => {
        e.preventDefault()
        setImgClass('main__img imgSlideOut')
        setTitleClass('main__title hidden')
        setIspeopleVisible(true)
        setTimeout(() => {
            navigate('/search')
        }, 800)
    }
    return (
        <div className='container'>
            <div className="main">
                <div className="main__content">
                    <div className={titleClass}>
                        <div className="word">Быстро</div>
                        <div className="word">Удобно</div>
                        <div className="word">Стабильно</div>
                    </div>
                </div>
                <div className="main__visual">
                    {isPeopleVisible && <img src={peopleImg} alt="people" className='main__people' />}
                    <img src={busImg} alt="bus" className={imgClass} />
                    <a className="main__btn" onClick={handleClickGo}>
                        Поехали!
                    </a>
                </div>
            </div>
        </div>
    )
}

export default MainPage