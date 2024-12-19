import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './wellcomePage.scss'

import busImg from '../../assets/images/bus-test.png'
import peopleImg from '../../assets/images/people-bg.png'

const WellcomePage = () => {
    const navigate = useNavigate()
    const [imgClass, setImgClass] = useState('wellcome__img')
    const [titleClass, setTitleClass] = useState('wellcome__title visible')
    const [isPeopleVisible, setIspeopleVisible] = useState(false)


    const handleClickGo = (e) => {
        e.preventDefault()
        setImgClass('wellcome__img imgSlideOut')
        setTitleClass('wellcome__title hidden')
        setIspeopleVisible(true)
        setTimeout(() => {
            navigate('/main')
        }, 1200)
    }
    return (
        <div className='container'>
            <div className="wellcome">
                <div className="wellcome__content">
                    <div className={titleClass}>
                        <div className="word">Быстро</div>
                        <div className="word">Удобно</div>
                        <div className="word">Стабильно</div>
                    </div>
                </div>
                <div className="wellcome__visual">
                    {isPeopleVisible && <img src={peopleImg} alt="people" className='wellcome__people' />}
                    <img src={busImg} alt="bus" className={imgClass} />
                    <a className="wellcome__btn" onClick={handleClickGo}>
                        Поехали!
                    </a>
                </div>
            </div>
        </div>
    )
}

export default WellcomePage