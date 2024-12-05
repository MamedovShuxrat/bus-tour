import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './mainPage.scss'

import busImg from '../../assets/images/bus-test.png'

const MainPage = () => {
    const navigate = useNavigate()
    const [imgClass, setImgClass] = useState('main__img')
    const [titleClass, setTitleClass] = useState('main__title visible')

    const handleClickGo = (e) => {
        e.preventDefault()
        setImgClass('main__img imgSlideOut')
        setTitleClass('main__title hidden')
        setTimeout(() => {
            navigate('/search')
        }, 800)
    }
    return (
        <div className='container'>
            <div className="main">
                <div className="main__content">
                    <h1 className={titleClass}>Заботимся О вашей Безопасности и Комфорте</h1>
                </div>
                <div className="main__visual">
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