/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import s from './BurgerMenu.module.sass';
import './BurgerMenu.sass';
import { slide as Menu } from 'react-burger-menu';

const BurgerMenu = () => {
	return (
		<Menu right width={ '400px' }>
			<a href="#" className={s.link}>
				Обучающее видео
			</a>
			<a href="#" className={s.link}>
				Оформление заказа
			</a>
			<a href="#" className={s.link}>
				Оплата
			</a>
			<a href="#" className={s.link}>
				Доставка
			</a>
			<a href="#" className={s.link}>
				Гарантии
			</a>
			<a href="#" className={s.link}>
				Возврат
			</a>
			<a href="#" className={s.link}>
				Контакты
			</a>
			<a href="#" className={s.link}>
				Партнерам
			</a>
		</Menu>
	);
};

export default BurgerMenu;
