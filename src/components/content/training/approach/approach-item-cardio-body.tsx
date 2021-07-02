import React, { FC } from 'react';
import {ApproachType} from '../../../../data-base/reducers/training-reducer';
import Styles from './approach-item-type.module.css';
import {declinationNumber, getFullTimeText} from '../../../../data-base/reusable-functions';

type PropsType = {
	approach: Omit<ApproachType, 'repeat' | 'weight' | 'type' | 'breakBeforeInSec'>
}

export const ApproachItemCardioBody:FC<PropsType> = ({ approach }) => {
	const { speed, time } = approach;
	const timeText = getFullTimeText(time);
	return (
		<div>
			<div>Время бега: { timeText }</div>
			<div>Скорость бега (км/ч): { speed }</div>
		</div>
	)
}