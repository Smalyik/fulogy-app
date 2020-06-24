/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import cx from 'classnames';
import s from './PathFooter.module.sass';

const PathFooter = () => {
	const [step, setStep] = useState(6);

	const pathNames = [
		'Вариант кухни',
		'Размеры',
		'Сенсор',
		'Питающий кабель',
		'Блок Питания',
		'Цвет свечения',
		'Монтаж',
		'Корзина',
	];

	const paths = pathNames.map((pathName, index) => {
		const path = {
			name: pathName,
		};
		if (step > index + 1) {
			path.type = s.finished;
		} else if (step === index + 1) {
			path.type = s.active;
		} else {
			path.type = '';
		}
		return path;
	});

	return (
		<footer className={s.footer}>
			{paths.map(path => {
				return (
					<a href="#" key={path.name} className={cx(path.type, s.path)}>
						{path.name}
					</a>
				);
			})}
		</footer>
	);
};

export default PathFooter;
