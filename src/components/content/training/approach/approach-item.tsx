import React, {FC} from 'react';
import {ApproachType} from '../../../../data-base/reducers/training-reducer';
import {ApproachItemWorkoutBody} from './approach-item-workout-body';
import {ApproachItemCardioBody} from './approach-item-cardio-body';
import Styles from './approach-item-type.module.css';

type PropsType = {
	approach: ApproachType,
	trainingId: number,
	deleteApproachThunk: (order: number, trainingId: number) => void
}


export const ApproachItem:FC<PropsType> = ({ approach, trainingId, deleteApproachThunk }) => {
	const { type, order, title } = approach;
	const isWorkout = type === 'WORKOUT';
	const isCardio = type === 'CARDIO';
	const typesText: { 'CARDIO': string, 'WORKOUT': string } = {
		'CARDIO': 'Кардио',
		'WORKOUT': 'Силовая'
	};
	const typeText = !type ? 'Тип не выбран' : typesText[type];
	return (
		<div className={Styles.container}>
			<div className={Styles.approach}>
				<div className={Styles.title_container}>
					<div className={Styles.title}>{ order }-й подход, { title }</div>
					<div className={Styles.delete} onClick={() => deleteApproachThunk(order, trainingId)}>Удалить</div>
				</div>
				<div>Тип тренировки: { typeText }</div>
				{ isWorkout && <ApproachItemWorkoutBody approach={approach} /> }
				{ isCardio && <ApproachItemCardioBody approach={approach} /> }
			</div>
		</div>
	)
}