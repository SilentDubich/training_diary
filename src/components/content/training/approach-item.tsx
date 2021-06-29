import React, {FC} from 'react';
import {ApproachType} from '../../../data-base/reducers/training-reducer';
import {ApproachItemWorkout} from './approach-item-workout';
import {ApproachItemCardio} from './approach-item-cardio';

type PropsType = {
	approach: ApproachType,
	trainingId: number
}


export const ApproachItem:FC<PropsType> = ({ approach, trainingId }) => {
	const { type } = approach;
	const isWorkout = type === 'WORKOUT';
	return (
		<>
			{ isWorkout && <ApproachItemWorkout approach={approach} /> }
			{ !isWorkout && <ApproachItemCardio approach={approach} /> }
		</>
	)
}