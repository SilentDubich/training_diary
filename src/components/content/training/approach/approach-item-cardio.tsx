import React, { FC } from 'react';
import {ApproachType} from '../../../../data-base/reducers/training-reducer';
import Styles from './approach-item-type.module.css';

type PropsType = {
	approach: Omit<ApproachType, 'repeat' | 'weight' | 'type' | 'breakBeforeInSec'>,
	trainingId: number,
	deleteApproachThunk: (order: number, trainingId: number) => void
}

export const ApproachItemCardio:FC<PropsType> = ({ approach, trainingId, deleteApproachThunk }) => {
	const { speed, time, title, order } = approach;
	return (
		<div className={Styles.container}>
			<div>
				<div className={Styles.title}>{ order }-й подход, { title }</div>
				<div>Время бега: { time }</div>
				<div>Скорость бега (км/ч): { speed }</div>
			</div>
			<div className={Styles.delete} onClick={() => deleteApproachThunk(order, trainingId)}>Удалить</div>
		</div>
	)
}