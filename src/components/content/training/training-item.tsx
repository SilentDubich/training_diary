import React, {FC} from "react";
import {addTrainingThunk, TrainingType} from '../../../data-base/reducers/training-reducer';
import Styles from "./training-item.module.css"
import {ApproachItem} from "./approach/approach-item";


type PropsType = {
	training: TrainingType,
	deleteTrainingThunk: (trainingId: number) => void,
	deleteApproachThunk: (order: number, trainingId: number) => void,
	addApproachThunk: (trainingId: number) => void
};

export const TrainingItem:FC<PropsType> = ({ training, deleteTrainingThunk, addApproachThunk, deleteApproachThunk }) => {
	const { id, approaches, datetime, description, title } = training;
	let normalizedDatetime = datetime?.replace('T', ' ');
	normalizedDatetime = normalizedDatetime?.replace('Z', ' ');
	const approachEls = approaches?.map(approach => <ApproachItem
		deleteApproachThunk={deleteApproachThunk}
		key={approach.order * Math.random()}
		approach={approach}
		trainingId={id}
	/>)
	return (
		<div className={Styles.container}>
			<div className={Styles.training}>
				<div className={Styles.training_title}>{ title ? title : 'Без названия' }</div>
				<div className={Styles.datetime}>{ normalizedDatetime }</div>
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