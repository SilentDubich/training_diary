import {AppStateType, InferActionsTypes} from "../store";
import {ThunkAction} from "redux-thunk";

export const parametersActions = {
	addParameterItem: () => ({ type: 'parametersReducer/addParameterItem' } as const),
	deleteParameterItem: (id: number) => ({ type: 'parametersReducer/deleteParameterItem' } as const)
};
type ParametersActionType = InferActionsTypes<typeof parametersActions>;
export type ParametersThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ParametersActionType>;

export type ItemType = {
	id: number,
	createDatetime: string, // Дата создания
	weight: number | null, // Вес
	percentFat: number | null, // Процент жира
	percentMuscles: number | null, // Процент мышц
	percentWater: number | null, // Процент воды
	widthBelly: number | null, // Складка на животе мм
	widthNeck: number | null, // Объем шеи(см)
	widthChest: number | null, // Объем груди(см)
	widthWaist: number | null, // Ширина талии(см)
	widthForearm: number | null, // Объем предплечья(см)
	widthBiceps: number | null, // Объем бицепса(см)
	widthHip: number | null, // Объем бедра(см)
	widthCaviar: number | null // Объем икр(см)
};

const parametersDefaultState = {
	items: [
		{
			id: 0,
			createDatetime: "2021-06-06",
			weight: 78.9,
			percentFat: 23,
			percentMuscles: 44,
			percentWater: 23,
			widthBelly: 8,
			widthNeck: 20,
			widthChest: 20,
			widthWaist: 20,
			widthForearm: 20,
			widthBiceps: 20,
			widthHip: 20,
			widthCaviar: 20
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