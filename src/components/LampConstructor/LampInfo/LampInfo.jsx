import React from 'react';
import s from './LampInfo.module.sass';
import cx from 'classnames';
import { localeCurrency } from '../../../utils/localeCurrency';

const LampInfo = () => {
	return (
		<div className={s.container}>
			<div className={s.info}>
				<span className={s.left}>Класс:</span>
				<span className={cx(s.right, s.type)}>Standart</span>
			</div>
			<div className={s.info}>
				<span className={s.left}>Потребляемая мощность:</span>
				<span className={s.right}>59 Вт.</span>
			</div>
			<div className={s.info}>
				<span className={s.left}>Сила света:</span>
				<span className={s.right}>3459 Люмен х 7,5 ламп накаливания по 40 Вт.</span>
			</div>
			<div className={s.info}>
				<span className={s.left}>Гарантия:</span>
				<span className={s.right}>3 года</span>
			</div>
			<div className={s.info}>
				<span className={s.left}>Монтаж:</span>
				<span className={s.right}>Да</span>
			</div>
			<div className={s.info}>
				<span className={s.left}>Итого сумма:</span>
				<span className={s.right}>{localeCurrency(2594)}</span>
			</div>
		</div>
	);
};

export default LampInfo;
