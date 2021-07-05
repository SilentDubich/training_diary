import React, {ComponentType, FC, useState} from 'react';
import {ApproachType} from '../../../../data-base/reducers/training-reducer';
import Styles from './approach-item-type.module.css'
import {getFullTimeText} from '../../../../data-base/reusable-functions';
import {ReusableInput} from '../../../reusable/reusable-input/reusable-input';
import {ReusableEditorApproachParam} from '../../../reusable/reusable-editor-approach-param/reusable-editor-approach-param';


type PropsType = {
	approach: ApproachType,
	updateApproachThunk: (approach: ApproachType, trainingId: number) => void,
	trainingId: number
};

export const ApproachItemWorkoutBody:FC<PropsType> = ({ approach, updateApproachThunk, trainingId }) => {
	const { repeat, breakBeforeInSec, weight } = approach;
	const timeText = getFullTimeText(breakBeforeInSec);
	return (
		<div>
			<div className={Styles.approach_param}>Время отдыха: { timeText }</div>
			<ReusableEditorApproachParam
				paramTitle={'Кол-во повторений'}
				param={repeat}
				approach={approach}
				updateApproachThunk={updateApproachThunk}
				trainingId={trainingId}
				field={'repeat'}
				id={'edit_repeat_container'}
			/>
			<ReusableEditorApproachParam
				paramTitle={'Вес (кг)'}
			    param={weight}
				approach={approach}
				updateApproachThunk={updateApproachThunk}
				trainingId={trainingId}
				field={'weight'}
				id={'edit_weight_container'}
			/>
		</div>
	)
}