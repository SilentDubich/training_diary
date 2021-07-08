import React, {FC, useState} from 'react';
import {ApproachType, updateTrainingThunk} from '../../../../data-base/reducers/training-reducer';
import {
	getFullTimeText,
	secondsToTime,
	timeToSeconds,
	useEventListener
} from '../../../../data-base/reusable-functions';
import {ReusableEditorApproachParam} from '../../../reusable/reusable-editor-approach-param/reusable-editor-approach-param';
import {ReusableInputTime} from '../../../reusable/reusable-input-date-time/reusable-input-date-time';
import Styles from './approach-item-type.module.css';

type PropsType = {
	approach: ApproachType,
	updateApproachThunk: (approach: ApproachType, trainingId: number) => void,
	trainingId: number
}

export const ApproachItemCardioBody:FC<PropsType> = ({ approach, updateApproachThunk, trainingId }) => {
	const { speed, time } = approach;
	const timeText = getFullTimeText(time);
	const [ hours, minutes, seconds ] = secondsToTime(time);
	const [ sec, setSec ] = useState<number>(seconds);
	const [ min, setMin ] = useState<number>(minutes);
	const [ hour, setHour ] = useState<number>(hours);
	const [ editTime, setEditTime ] = useState<boolean>(false);

	const ref = React.createRef<any>();
	useEventListener(ref, 'time changed', e => updateTime(e.detail));
	const updateTime = (detail: { sec: number, min: number, hour: number }) => {
		const { sec, min, hour } = detail;
		setSec(sec);
		setMin(min);
		setHour(hour);
	};
	const saveDate = () => {
		approach.time = timeToSeconds(hour, min, sec);
		debugger
		updateApproachThunk(approach, trainingId);
		setEditTime(false);
	};

	return (
		<div ref={ref}>
			{ !editTime && <div onClick={() => setEditTime(true)}>Время бега: { timeText }</div> }
			{ editTime &&
				<div className={Styles.time}>
					<ReusableInputTime secValue={sec} minValue={min} hourValue={hour}/>
					<div onClick={() => saveDate()}>Сохранить</div>
				</div>
			}
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