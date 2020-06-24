/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import s from './Header.module.sass';
import { ReactComponent as Logo } from '../../img/logo.svg';
import { ReactComponent as ShoppingBasketIcon } from '../../img/shopping-basket-solid.svg';
import BurgerMenu from '../UI/BurgerMenu';

const Header = () => {
	return (
		<div className={s.header}>
			<a href="#" className={s.logo}>
				<Logo />
			</a>
			<div className={s.iconsWrapper}>
				<a href="#">
					<ShoppingBasketIcon
						style={{
							marginRight: 20,
						}}
					/>
				</a>
				<BurgerMenu />
			</div>
		</div>
	);
};

export default Header;
