import React, {ComponentType, FC} from "react";
import {AppStateType} from "../../../data-base/store";
import {compose} from "redux";
import {connect} from "react-redux";
import {
	addTrainingThunk,
	addApproachThunk,
	deleteTrainingThunk,
	deleteApproachThunk,
	TrainingType
} from "../../../data-base/reducers/training-reducer";
import {TrainingItem} from "./training-item";
import Styles from "../targets/targets.module.css";





type PropsType = {
	trainings: Array<TrainingType>,
	addTrainingThunk: () => void,
	deleteTrainingThunk: (trainingId: number) => void,
}


export const Training:FC<PropsType> = ({ trainings, addTrainingThunk, deleteTrainingThunk }) => {
	const trainingItems = trainings.map(training => <TrainingItem key={training.id} training={training} deleteTrainingThunk={deleteTrainingThunk}/>);
	return (
		<div>
			<div className={Styles.header}>
				<div className={Styles.header_title}>Мои тренировки</div>
				<div className={Styles.header_add} onClick={() => addTrainingThunk()}>Добавить тренировку</div>
			</div>
			<div>
				{ trainingItems.length === 0 && <div className={Styles.empty_list}>Список пуст</div> }
				{ trainingItems }
			</div>
		</div>
	)
}





const mapStateToProps = (state: AppStateType) => {
	return {
		trainings: state.trainingReducer.items
	}
};

export const TrainingContainer = compose<ComponentType>(
	connect(mapStateToProps, { addTrainingThunk, deleteTrainingThunk })
)(Training);