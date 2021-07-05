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
	const [ editSpeed, setEditSpeed ] = useState(false);
	const [ editableSpeed, setEditableSpeed ] = useState<number>(speed || 0);
	const updateSpeed = (value: number) => {
		setEditableSpeed(value);
	};
	const saveValue = (value: number, callback: (bool: boolean) => void, field: 'speed' | 'time') => {
		approach[field] = value;
		updateApproachThunk(approach, trainingId);
		callback(false);
	};
	window.closeFunctions.push({ elemIds: [ 'edit_speed_container' ], callback: setEditSpeed });
	return (
		<div>
			<div>Время бега: { timeText }</div>
			<ReusableEditorApproachParam paramTitle={'Скорость бега (км/ч)'} param={speed} approach={approach} updateApproachThunk={updateApproachThunk} trainingId={trainingId} field={'speed' as const} />
		</div>
	)
}