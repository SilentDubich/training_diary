import {AppStateType, InferActionsTypes} from "../store";
import {ThunkAction} from "redux-thunk";

export const parametersActions = {
	addParameterItem: () => ({ type: 'parametersReducer/addParameterItem' } as const),
	deleteParameterItem: (id: number) => ({ type: 'parametersReducer/deleteParameterItem' } as const)
};
type ParametersActionType = InferActionsTypes<typeof parametersActions>;
export type ParametersThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ParametersActionType>;

export type ItemType = {
	createDatetime: string,
	weight: number,
	percentFat: number,
	percentMuscles: number
};

const parametersDefaultState = {
	items: [
		{
			createDatetime: "2021-06-06",
			weight: 78.9,
			percentFat: 23,
			percentMuscles: 44
		}
	] as Array<ItemType>
};

type ParametersDefaultStateType = typeof parametersDefaultState;


export const parametersReducer = (state = parametersDefaultState, action: ParametersActionType): ParametersDefaultStateType => {
	switch (action.type) {
		default:
			return state
	}
}