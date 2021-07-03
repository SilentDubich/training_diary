import React, {FC, useRef, useState} from 'react';
import {ApproachType} from '../../../../data-base/reducers/training-reducer';
import {ApproachItemWorkoutBody} from './approach-item-workout-body';
import {ApproachItemCardioBody} from './approach-item-cardio-body';
import Styles from './approach-item-type.module.css';

type PropsType = {
	approach: ApproachType,
	trainingId: number,
	deleteApproachThunk: (order: number, trainingId: number) => void,
	updateApproachThunk: (approach: ApproachType, trainingId: number) => void
}


export const ApproachItem:FC<PropsType> = ({ approach, trainingId, deleteApproachThunk, updateApproachThunk }) => {
	const { type, order, title } = approach;
	const isWorkout = type === 'WORKOUT';
	const isCardio = type === 'CARDIO';
	const typesText: { 'CARDIO': string, 'WORKOUT': string } = {
		'CARDIO': 'Кардио',
		'WORKOUT': 'Силовая'
	};
	const typeText = !type ? 'Тип не выбран' : typesText[type];
	const [ editType, setEditType ] = useState<boolean>(false);
	window.closeFunctions.push({ elemIds: [ 'type', 'types_container' ], callback: setEditType });

	const updateType = (type: 'WORKOUT' | 'CARDIO') => {
		approach.type = type;
		updateApproachThunk(approach, trainingId);
		setEditType(false);
	};
	return (
		<div className={Styles.container}>
			<div className={Styles.approach}>
				<div className={Styles.title_container}>
					<div className={Styles.title}>{ order }-й подход, { title }</div>
					<div className={Styles.delete} onClick={() => deleteApproachThunk(order, trainingId)}>Удалить</div>
				</div>
				<div id={'type'} onClick={() => setEditType(!editType)} className={Styles.type}>Тип тренировки: { typeText }</div>
				{
					editType &&
						<div id={'types_container'} className={Styles.training_types_container}>
							<div className={Styles.training_type} onClick={() => updateType('CARDIO')}>Кардио</div>
							<div className={Styles.training_type} onClick={() => updateType('WORKOUT')}>Силовая</div>
						</div>
				}
				{ isWorkout && <ApproachItemWorkoutBody approach={approach} /> }
				{ isCardio && <ApproachItemCardioBody approach={approach} /> }
			</div>
		</div>
	)
}