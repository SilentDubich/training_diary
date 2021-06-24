import {AppStateType, InferActionsTypes} from "../store";
import {ThunkAction} from "redux-thunk";

export type ApproachType = {
	title: string | null,
	order: number,
	breakBeforeInSec: number | null,
	type: 'CARDIO' | 'WORKOUT' | null,
	weight: number | null,
	repeat: number | null,
	speed: number | null,
	time: number | null
};

export type TrainingType = {
	id: number,
	title: string | null,
	datetime: string | null,
	description: string | null,
	approaches: Array<ApproachType> | null
};

export const trainingActions = {
	addTraining: () => ({ type: 'trainingReducer/addTraining' } as const),
	addApproach: (trainingId: number) => ({ type: 'trainingReducer/addApproach', trainingId } as const),
	deleteTraining: (trainingId: number) => ({ type: 'trainingReducer/deleteTraining', trainingId } as const),
	deleteApproach: (order: number, trainingId: number) => ({ type: 'trainingReducer/deleteApproach', order, trainingId } as const)
};

type TrainingActionType = InferActionsTypes<typeof trainingActions>;
export type TrainingThunkType = ThunkAction<Promise<void>, AppStateType, unknown, TrainingActionType>;

export const addTrainingThunk = (): TrainingThunkType => {
	return async (dispatch) => {
		dispatch(trainingActions.addTraining());
	}
};

export const addApproachThunk = (trainingId: number): TrainingThunkType => {
	return async (dispatch) => {
		dispatch(trainingActions.addApproach(trainingId));
	}
};

export const deleteTrainingThunk = (trainingId: number): TrainingThunkType => {
	return async (dispatch) => {
		dispatch(trainingActions.deleteTraining(trainingId));
	}
};

export const deleteApproachThunk = (order: number, trainingId: number): TrainingThunkType => {
	return async (dispatch) => {
		dispatch(trainingActions.deleteApproach(order, trainingId));
	}
};

const trainingDefaultState = {
	items: [
		{
			id: 1,
			title: 'Пятничная тренировка',
			datetime: '2021-06-22T10:00:00Z',
			description: 'Тренировал грудь, бицепсы',
			approaches: null
		}
	] as Array<TrainingType>,
	maxId: 1
}

type TrainingDefaultStateType = typeof trainingDefaultState;

export const trainingReducer = (state = trainingDefaultState, action: TrainingActionType): TrainingDefaultStateType => {
	const { items, maxId } = state;
	const itemsCopy = [ ...items ];
	switch (action.type) {
		case "trainingReducer/addTraining":
			const newId: number = maxId + 1;
			const data: TrainingType = {
				id: newId,
				title: null,
				description: null,
				datetime: null,
				approaches: null
			}
			return { ...state, items: [ data, ...items ], maxId: newId };
		case "trainingReducer/addApproach":
			if (true) {
				const { trainingId } = action;
				const trainingIndex: number = itemsCopy.findIndex(item => item.id === trainingId);
				if (trainingIndex !== -1) {
					let approaches: Array<ApproachType> | null = itemsCopy[trainingIndex].approaches;
					if (!approaches) approaches = [];
					const approachesLength: number = approaches.length;
					const approach: ApproachType = {
						order: approachesLength,
						breakBeforeInSec: null,
						repeat: null,
						speed: null,
						time: null,
						title: null,
						type: null,
						weight: null
					}
					approaches.push(approach);
				}
				return { ...state, items: itemsCopy };
			}
		case "trainingReducer/deleteTraining":
			if (true) {
				const { trainingId } = action;
				const trainingIndex: number = itemsCopy.findIndex(item => item.id === trainingId);
				if (trainingIndex) itemsCopy.splice(trainingIndex, 1);
				return { ...state, items: itemsCopy };
			}
		case "trainingReducer/deleteApproach":
			if (true) {
				const { trainingId, order } = action;
				const trainingIndex: number = itemsCopy.findIndex(item => item.id === trainingId);
				if (trainingIndex) {
					const approachIndex: number | undefined = itemsCopy[trainingIndex].approaches?.findIndex(approach => approach.order === order);
					if (approachIndex !== -1 && approachIndex !== undefined) itemsCopy[trainingIndex].approaches?.splice(approachIndex, 1);
				}
				return { ...state, items: itemsCopy }
			}
		default:
			return state;
	}
}