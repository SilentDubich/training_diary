import React, {FC} from "react";
import {TrainingType} from "../../../data-base/reducers/training-reducer";
import Styles from "./training-item.module.css"


type PropsType = {
	training: TrainingType,
	deleteTrainingThunk: (trainingId: number) => void,
};

export const TrainingItem:FC<PropsType> = ({ training, deleteTrainingThunk }) => {
	const { id, approaches, datetime, description, title } = training;
	let normalizedDatetime = datetime?.replace('T', ' ');
	normalizedDatetime = normalizedDatetime?.replace('Z', ' ');
	return (
		<div className={Styles.container}>
			<div className={Styles.training}>
				<div className={Styles.training_title}>{ title ? title : 'Без названия' }</div>
				<div className={Styles.datetime}>{ normalizedDatetime }</div>
				<div className={Styles.delete} onClick={() => deleteTrainingThunk(id)}>Удалить</div>
			</div>
			<div className={Styles.description}>{ description ? `Описание тренировки: ${ description }` : 'Описание отсутствует' }</div>
			{ !approaches && <div>Подходов нет</div> }
		</div>
	)
}