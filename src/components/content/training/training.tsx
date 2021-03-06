import React, {ComponentType, FC} from "react";
import {AppStateType} from "../../../data-base/store";
import {compose} from "redux";
import {connect} from "react-redux";
import {
	addTrainingThunk,
	addApproachThunk,
	deleteTrainingThunk,
	deleteApproachThunk,
	updateApproachThunk,
	TrainingType, ApproachType, updateTrainingThunk
} from '../../../data-base/reducers/training-reducer';
import {TrainingItem} from "./training-item";
import Styles from "../targets/targets.module.css";





type PropsType = {
	trainings: Array<TrainingType>,
	addTrainingThunk: () => void,
	deleteTrainingThunk: (trainingId: number) => void,
	deleteApproachThunk: (order: number, trainingId: number) => void,
	addApproachThunk: (trainingId: number) => void,
	updateApproachThunk: (approach: ApproachType) => void,
	updateTrainingThunk: (training: TrainingType) => void
}


export const Training:FC<PropsType> = ({ trainings, addTrainingThunk, deleteTrainingThunk, addApproachThunk, deleteApproachThunk, updateApproachThunk, updateTrainingThunk }) => {
	const trainingItems = trainings.map(training => <TrainingItem
		key={training.id}
		training={training}
		updateApproachThunk={updateApproachThunk}
		deleteTrainingThunk={deleteTrainingThunk}
		addApproachThunk={addApproachThunk}
		deleteApproachThunk={deleteApproachThunk}
		updateTrainingThunk={updateTrainingThunk}
	/>);
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
	connect(mapStateToProps, { addTrainingThunk, updateTrainingThunk, deleteTrainingThunk, addApproachThunk, deleteApproachThunk, updateApproachThunk })
)(Training);