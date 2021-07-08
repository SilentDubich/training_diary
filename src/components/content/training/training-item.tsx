import React, {FC, ReactNode, RefObject, useState} from 'react';
import {
	addTrainingThunk,
	ApproachType,
	TrainingType,
	updateTrainingThunk
} from '../../../data-base/reducers/training-reducer';
import Styles from "./training-item.module.css"
import {ApproachItem} from "./approach/approach-item";
import {ReusableInputDate} from '../../reusable/reusable-input-date-time/reusable-input-date';
import {useEventListener} from '../../../data-base/reusable-functions';


type PropsType = {
	training: TrainingType,
	deleteTrainingThunk: (trainingId: number) => void,
	deleteApproachThunk: (order: number, trainingId: number) => void,
	addApproachThunk: (trainingId: number) => void,
	updateApproachThunk: (approach: ApproachType, trainingId: number) => void,
	updateTrainingThunk: (training: TrainingType) => void
};

export const TrainingItem:FC<PropsType> = ({ training, deleteTrainingThunk, addApproachThunk, deleteApproachThunk, updateApproachThunk }) => {
	const { id, approaches, datetime, description, title } = training;
	const dateParts = datetime ? datetime.split('-') : null;

	const [ day, setDay ] = useState<number>(dateParts ? +dateParts[2] : 1);
	const [ month, setMonth ] = useState<number>(dateParts ? +dateParts[1] : 1);
	const [ year, setYear ] = useState<number>(dateParts ? +dateParts[0] : 1);

	const approachEls = approaches?.map(approach => <ApproachItem
		deleteApproachThunk={deleteApproachThunk}
		updateApproachThunk={updateApproachThunk}
		key={approach.order * Math.random()}
		approach={approach}
		trainingId={id}
	/>);

	const [ editTime, setEditTime ] = useState<boolean>(false);
	const ref = React.createRef<any>();
	useEventListener(ref, 'date changed', e => updateDate(e.detail));
	const updateDate = (detail: { day: number, month: number, year: number }) => {
		const { day, month, year } = detail;
		setDay(day);
		setMonth(month);
		setYear(year);
	};
	const saveDate = () => {
		const dayToSend = day < 10 ? `0${ day }` : day;
		const monthToSend = month < 10 ? `0${ month }` : month;
		training.datetime = `${ year }-${ monthToSend }-${ dayToSend }`;
		updateTrainingThunk(training);
		setEditTime(false);
	};
	return (
		<div ref={ref} className={Styles.container}>
			<div className={Styles.training}>
				<div className={Styles.training_title}>{ title ? title : 'Без названия' }</div>
				{ !editTime && <div className={Styles.datetime} onClick={() => setEditTime(true)}>{datetime}</div> }
				{
					editTime &&
					<div className={Styles.datetime}>
						<ReusableInputDate dayValue={day} monthValue={month} yearValue={year}></ReusableInputDate>
						<div onClick={() => saveDate()}>Сохранить</div>
					</div>
				}
				<div className={Styles.delete} onClick={() => deleteTrainingThunk(id)}>Удалить</div>
			</div>
			<div className={Styles.description}>{ description ? `Описание тренировки: ${ description }` : 'Описание отсутствует' }</div>
			<div className={Styles.add} onClick={() => addApproachThunk(id)}>Добавить подход</div>
			{ !approaches && <div>Подходов нет</div> }
			<div className={Styles.approaches}>
				{ approaches && approachEls }
			</div>
		</div>
	)
};