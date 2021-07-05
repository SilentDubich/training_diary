import React, {FC, useState} from 'react';
import {ApproachType} from '../../../../data-base/reducers/training-reducer';
import {getFullTimeText} from '../../../../data-base/reusable-functions';
import Styles from './approach-item-type.module.css';
import {ReusableInput} from '../../../reusable/reusable-input/reusable-input';
import {ReusableEditorApproachParam} from '../../../reusable/reusable-editor-approach-param/reusable-editor-approach-param';

type PropsType = {
	approach: ApproachType,
	updateApproachThunk: (approach: ApproachType, trainingId: number) => void,
	trainingId: number
}

export const ApproachItemCardioBody:FC<PropsType> = ({ approach, updateApproachThunk, trainingId }) => {
	const { speed, time } = approach;
	const timeText = getFullTimeText(time);
	return (
		<div>
			<div>Время бега: { timeText }</div>
			<ReusableEditorApproachParam id={'edit_speed_container'} paramTitle={'Скорость бега (км/ч)'} param={speed} approach={approach} updateApproachThunk={updateApproachThunk} trainingId={trainingId} field={'speed'} />
		</div>
	)
}