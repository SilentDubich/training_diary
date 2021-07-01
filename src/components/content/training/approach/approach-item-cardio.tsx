import React, { FC } from 'react';
import {ApproachType} from '../../../../data-base/reducers/training-reducer';


type PropsType = {
	approach: Omit<ApproachType, 'repeat' | 'weight' | 'type' | 'breakBeforeInSec'>
}

export const ApproachItemCardio:FC<PropsType> = ({ approach }) => {
	const { speed, time, title, order } = approach;
	return (
		<div>
			<div>{ order }-й подход, { title }</div>
			<div>Время бега: { time }</div>
			<div>Скорость бега (кг): { speed }</div>
		</div>
	)
}