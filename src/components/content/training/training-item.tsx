import React, {FC, useState} from 'react';
import {addTrainingThunk, ApproachType, TrainingType} from '../../../data-base/reducers/training-reducer';
import Styles from "./training-item.module.css"
import {ApproachItem} from "./approach/approach-item";
import {ReusableInputDateTime} from '../../reusable/reusable-input-date-time/reusable-input-date-time';


type PropsType = {
	training: TrainingType,
	deleteTrainingThunk: (trainingId: number) => void,
	deleteApproachThunk: (order: number, trainingId: number) => void,
	addApproachThunk: (trainingId: number) => void,
	updateApproachThunk: (approach: ApproachType, trainingId: number) => void
};

export const TrainingItem:FC<PropsType> = ({ training, deleteTrainingThunk, addApproachThunk, deleteApproachThunk, updateApproachThunk }) => {
	const { id, approaches, datetime, description, title } = training;
	let normalizedDatetime = datetime?.replace('T', ' ');
	normalizedDatetime = normalizedDatetime?.replace('Z', ' ');
	const approachEls = approaches?.map(approach => <ApproachItem
		deleteApproachThunk={deleteApproachThunk}
		updateApproachThunk={updateApproachThunk}
		key={approach.order * Math.random()}
		approach={approach}
		trainingId={id}
	/>);

	const [ editTime, setEditTme ] = useState<boolean>(false);

	return (
		<div className={Styles.container}>
			<div className={Styles.training}>
				<div className={Styles.training_title}>{ title ? title : 'Без названия' }</div>
				{ !editTime && <div className={Styles.datetime} onClick={() => setEditTme(true)}>{normalizedDatetime}</div> }
				{
					editTime &&
					<div className={Styles.datetime}>
						<ReusableInputDateTime></ReusableInputDateTime>
						<div onClick={() => setEditTme(false)}>Сохранить</div>
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