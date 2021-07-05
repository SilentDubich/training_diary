import React, {ComponentType, FC, useState} from 'react';
import {ApproachType} from '../../../../data-base/reducers/training-reducer';
import Styles from './approach-item-type.module.css'
import {getFullTimeText} from '../../../../data-base/reusable-functions';
import {ReusableInput} from '../../../reusable/reusable-input/reusable-input';




type PropsType = {
	approach: ApproachType,
	updateApproachThunk: (approach: ApproachType, trainingId: number) => void,
	trainingId: number
}

export const ApproachItemWorkoutBody:FC<PropsType> = ({ approach, updateApproachThunk, trainingId }) => {
	const { repeat, breakBeforeInSec, weight } = approach;
	const timeText = getFullTimeText(breakBeforeInSec);
	const [ editRepeat, setEditRepeat ] = useState(false);
	const [ editableRepeat, setEditableRepeat ] = useState<number>(repeat || 0);
	const [ editWeight, setEditWeight ] = useState(false);
	const [ editableWeight, setEditableWeight ] = useState<number>(weight || 0);
	const updateRepeat = (value: number) => {
		setEditableRepeat(value);
	};
	const updateWeight = (value: number) => {
		setEditableWeight(value);
	};
	const saveValue = (value: number, callback: (bool: boolean) => void, field: 'repeat' | 'weight') => {
		approach[field] = value;
		updateApproachThunk(approach, trainingId);
		callback(false);
	};
	window.closeFunctions.push({ elemIds: [ 'edit_repeat_container' ], callback: setEditRepeat });
	window.closeFunctions.push({ elemIds: [ 'edit_weight_container' ], callback: setEditWeight });
	return (
		<div>
			<div className={Styles.approach_param}>Время отдыха: { timeText }</div>
			<div id={'edit_repeat_container'}>
				{ !editRepeat && <div onClick={() => setEditRepeat(true)} className={Styles.approach_param}>Кол-во повторений: { repeat ? repeat : 0 }</div> }
				{
					editRepeat &&
					<div className={Styles.edit_approach}>
						<div className={Styles.input}>
							<ReusableInput value={editableRepeat || 0} updateValue={updateRepeat} type={'number'}/>
						</div>
						<div className={Styles.save} onClick={() => saveValue(editableRepeat, setEditRepeat, 'repeat')}>Сохранить</div>
					</div>
				}
			</div>
			<div id={'edit_weight_container'}>
				{ !editWeight && <div onClick={() => setEditWeight(true)} className={Styles.approach_param}>Вес (кг): { weight ? weight : 0 }</div> }
				{
					editWeight &&
					<div className={Styles.edit_approach}>
						<div className={Styles.input}>
							<ReusableInput value={editableWeight || 0} updateValue={updateWeight} type={'number'}/>
						</div>
						<div className={Styles.save} onClick={() => saveValue(editableWeight, setEditWeight, 'weight')}>Сохранить</div>
					</div>
				}
			</div>
		</div>
	)
}