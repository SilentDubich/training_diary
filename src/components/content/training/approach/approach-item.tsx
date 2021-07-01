import React, {FC} from 'react';
import {ApproachType} from '../../../../data-base/reducers/training-reducer';
import {ApproachItemWorkout} from './approach-item-workout';
import {ApproachItemCardio} from './approach-item-cardio';

type PropsType = {
	approach: ApproachType,
	trainingId: number,
	deleteApproachThunk: (order: number, trainingId: number) => void,
	addApproachThunk: (order: number, trainingId: number) => void
}


export const ApproachItem:FC<PropsType> = ({ approach, trainingId, addApproachThunk, deleteApproachThunk }) => {
	const { type } = approach;
	const isWorkout = type === 'WORKOUT';
	return (
		<div>
			{ isWorkout && <ApproachItemWorkout deleteApproachThunk={deleteApproachThunk} trainingId={trainingId} approach={approach} /> }
			{ !isWorkout && <ApproachItemCardio deleteApproachThunk={deleteApproachThunk} trainingId={trainingId} approach={approach} /> }
		</div>
	)
}