import React, { useState } from 'react';
import s from './LampConstructor.module.sass';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss';
import cx from 'classnames';
import LampInfo from './LampInfo';
import { ReactComponent as InfoIcon } from '../../img/info-solid.svg';

import warmIntro from '../../img/warm-intro.png';
import dayIntro from '../../img/day-intro.png';
import coldIntro from '../../img/cold-intro.png';

const LampConstructor = () => {
	const [isDetails, setIsDetails] = useState(false);

	const swiperConfig = {
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	};

	return (
		<>
			{!isDetails ? (
				<Tabs selectedTabClassName={s.selectedTab} selectedTabPanelClassName={s.selectedPanel}>
					<div className={s.container}>
						<div className={cx('col', s.images)}>
							<TabPanel className={s.panel}>
								<Swiper {...swiperConfig}>
									<img src={require('../../img/warm-1.png')} alt="" />
									<img src={require('../../img/warm-2.png')} alt="" />
									<img src={require('../../img/warm-3.png')} alt="" />
								</Swiper>
							</TabPanel>
							<TabPanel className={s.panel}>
								<Swiper {...swiperConfig}>
									<img src={require('../../img/day-1.png')} alt="" />
									<img src={require('../../img/day-2.png')} alt="" />
									<img src={require('../../img/day-3.png')} alt="" />
								</Swiper>
							</TabPanel>
							<TabPanel className={s.panel}>
								<Swiper {...swiperConfig}>
									<img src={require('../../img/cold-1.png')} alt="" />
									<img src={require('../../img/cold-2.png')} alt="" />
									<img src={require('../../img/cold-3.png')} alt="" />
								</Swiper>
							</TabPanel>
						</div>
						<div className={cx('col', s.info)}>
							<LampConstructor.Info />
							<div className={s.details}>
								<button className={s.button} onClick={() => setIsDetails(true)}>
									<InfoIcon />
								</button>
								<span>Выберите цвет свечения</span>
							</div>
							<TabList className={s.tabList}>
								<Tab className={s.tab}>
									<img src={warmIntro} alt="" />
								</Tab>
								<Tab className={s.tab}>
									<img src={dayIntro} alt="" />
								</Tab>
								<Tab className={s.tab}>
									<img src={coldIntro} alt="" />
								</Tab>
							</TabList>
						</div>
					</div>
				</Tabs>
			) : (
				<div className={s.detailsContainer}>
					<button className={s.button} onClick={() => setIsDetails(false)}>
						<span>Вернуться</span>
					</button>
					<div className={s.text}>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum tempora praesentium voluptatibus
							officia ab quos consequatur dolor autem voluptatum soluta, maxime expedita ipsum ipsam aliquid fugit
							laboriosam officiis ullam vero. Cumque placeat magnam corporis porro nobis obcaecati laudantium
							incidunt id commodi? Minima tempore saepe sequi exercitationem magnam amet beatae quidem qui, quisquam
							impedit blanditiis distinctio voluptas officiis, expedita voluptate quibusdam. Nobis tempore sint
							ratione labore voluptas dolor excepturi! Mollitia aperiam minima quam sit cupiditate veniam reiciendis
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum tempora praesentium voluptatibus
							officia ab quos consequatur dolor autem voluptatum soluta, maxime expedita ipsum ipsam aliquid fugit
							laboriosam officiis ullam vero. Cumque placeat magnam corporis porro nobis obcaecati laudantium
							incidunt id commodi? Minima tempore saepe sequi exercitationem magnam amet beatae quidem qui, quisquam
							impedit blanditiis distinctio voluptas officiis, expedita voluptate quibusdam. Nobis tempore sint
							ratione labore voluptas dolor excepturi! Mollitia aperiam minima quam sit cupiditate veniam reiciendis
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum tempora praesentium voluptatibus
							officia ab quos consequatur dolor autem voluptatum soluta, maxime expedita ipsum ipsam aliquid fugit
							laboriosam officiis ullam vero. Cumque placeat magnam corporis porro nobis obcaecati laudantium
							incidunt id commodi? Minima tempore saepe sequi exercitationem magnam amet beatae quidem qui, quisquam
							impedit blanditiis distinctio voluptas officiis, expedita voluptate quibusdam. Nobis tempore sint
							ratione labore voluptas dolor excepturi! Mollitia aperiam minima quam sit cupiditate veniam reiciendis
						</p>
					</div>
				</div>
			)}
		</>
	);
};

LampConstructor.Info = LampInfo;

export default LampConstructor;
