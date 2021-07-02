import React, {ComponentType, FC} from 'react';
import {ApproachType} from '../../../../data-base/reducers/training-reducer';
import Styles from './approach-item-type.module.css'
import {getFullTimeText} from '../../../../data-base/reusable-functions';




type PropsType = {
	approach: Omit<ApproachType, 'time' | 'speed' | 'type'>
}

export const ApproachItemWorkoutBody:FC<PropsType> = ({ approach }) => {
	const { repeat, breakBeforeInSec, weight, title, order } = approach;
	const timeText = getFullTimeText(breakBeforeInSec);
	return (
		<div>
			<div>Время отдыха перед подходом (сек): { timeText }</div>
			<div>Кол-во повторений: { repeat ? repeat : 0 }</div>
			<div>Вес (кг): { weight ? weight : 0 }</div>
		</div>
	)
}