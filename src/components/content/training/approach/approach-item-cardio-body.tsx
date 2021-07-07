import React, {FC, useState} from 'react';
import {ApproachType} from '../../../../data-base/reducers/training-reducer';
import {getFullTimeText, useEventListener} from '../../../../data-base/reusable-functions';
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
			<ReusableEditorApproachParam
				id={'edit_speed_container'}
				paramTitle={'Скорость бега (км/ч)'}
				param={speed}
				approach={approach}
				updateApproachThunk={updateApproachThunk}
				trainingId={trainingId} field={'speed'}
			/>
		</div>
	)
}