import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/icons/test-logo.svg'
import './footer.scss'

import vk from '../../assets/icons/social/vk.svg'
import whatsup from '../../assets/icons/social/whatsap.svg'
import tg from '../../assets/icons/social/tg.svg'

const Footer = () => {
	return (
		<footer className='footer'>
			<div className="container">
				<div className="footer__inner">
					<div className="footer__wrapper">
						<div className="footer__item">
							<Link to="/">
								<img className='footer__logo' width={97} height={59} src={logo} alt="logo" />
							</Link>
							<p className="footer__slogan">Быстро, удобно, стабильно</p>
							<div className="footer__contacts">
								<a href="tel:+78005553535" className="footer__contact">Телефон: + 7(800) 555-35-35</a>
								<a href="mailto:example@mail.ru" className="footer__contact">Почта: example@mail.ru</a>
							</div>
						</div>
						<div className="footer__item">
							<p className="footer__item-title">Аренда транспорта</p>
							<a href="#" className="footer__link">Личный кабинет клиента</a>
							<a href="#" className="footer__link">Все типы транспорта</a>
							<a href="#" className="footer__link">О компании</a>
							<a href="#" className="footer__link">Обратная связь</a>
						</div>
						<div className="footer__item">
							<p className="footer__item-title">Партнерам</p>
							<a href="#" className="footer__link">Личный кабинет партнера</a>
							<a href="#" className="footer__link">Присоединиться к нам</a>
							<a href="#" className="footer__link">Документация для партнеров</a>
						</div>
						<div className="footer__item footer__item-social">
							<p className="footer__item-title">Мы в соцсетях</p>
							<a href="#" className="footer__link footer__link-social">
								<img src={vk} alt="social icon" />
								Вконтакте
							</a>
							<a href="#" className="footer__link footer__link-social">
								<img src={whatsup} alt="social icon" />
								What’s App
							</a>
							<a href="#" className="footer__link footer__link-social">
								<img src={tg} alt="social icon" />
								Telegram
							</a>
						</div>
					</div>
					<div className="footer__copy-right">
						<a href="#">Политика конфиденциальности</a>
						<a href="#">Пользовательское соглашение</a>
						<a href="#">©2024  ООО “Бус” <br />
							Все права защищены</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer