import React, {ComponentType, FC} from 'react';
import {ApproachType} from '../../../../data-base/reducers/training-reducer';
import Styles from './approach-item-type.module.css'




type PropsType = {
	approach: Omit<ApproachType, 'time' | 'speed' | 'type'>,
	trainingId: number
}

export const ApproachItemWorkout:FC<PropsType> = ({ approach, trainingId }) => {
	const { repeat, breakBeforeInSec, weight, title, order } = approach;
	return (
		<div className={Styles.container}>
			<div className={Styles.approach}>
				<div className={Styles.title}>{ order }-й подход, { title }</div>
				<div>Время отдыха перед подходом (сек): { breakBeforeInSec }</div>
				<div>Кол-во повторений: { repeat }</div>
				<div>Вес (кг): { weight }</div>
			</div>
			<div className={Styles.delete}>Удалить</div>
		</div>
	)
}