import React, { FC } from 'react';
import {ApproachType} from '../../../data-base/reducers/training-reducer';


type PropsType = {
	approach: ApproachType
}

export const ApproachItemCardio:FC<PropsType> = ({ approach }) => {
	const { type, repeat, speed, time, breakBeforeInSec, weight, title, order } = approach;
	return (
		<div>Cardio</div>
	)
}