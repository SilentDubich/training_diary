import React, {ComponentType, FC} from 'react';
import {ApproachType} from '../../../data-base/reducers/training-reducer';




type PropsType = {
	approach: Omit<ApproachType, 'time' | 'speed' | 'type'>
}

export const ApproachItemWorkout:FC<PropsType> = ({ approach }) => {
	const { repeat, breakBeforeInSec, weight, title, order } = approach;
	return (
		<div>
			<div>{ order }-й подход, { title }</div>
			<div>Время отдыха перед подходом (сек): { breakBeforeInSec }</div>
			<div>Кол-во повторений: { repeat }</div>
			<div>Вес (кг): { weight }</div>
		</div>
	)
}