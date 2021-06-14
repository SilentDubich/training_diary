import {AppStateType, InferActionsTypes} from "../store";
import {ThunkAction} from "redux-thunk";

export const parametersActions = {
	addParameterItem: (data: ItemType) => ({ type: 'parametersReducer/addParameterItem', data } as const),
	deleteParameterItem: (id: number) => ({ type: 'parametersReducer/deleteParameterItem', id } as const)
};

type ParametersActionType = InferActionsTypes<typeof parametersActions>;
export type ParametersThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ParametersActionType>;

export const addParameterItemThunk = (data: ItemType): ParametersThunkType => {
	return async (dispatch) => {
		dispatch(parametersActions.addParameterItem(data));
	}
};

export const deleteParameterItemThunk = (id: number): ParametersThunkType => {
	return async (dispatch) => {
		dispatch(parametersActions.deleteParameterItem(id));
	}
};

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
			createDatetime: '2021-06-06',
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
	] as Array<ItemType>,
	maxId: 0
};

type ParametersDefaultStateType = typeof parametersDefaultState;


export const parametersReducer = (state = parametersDefaultState, action: ParametersActionType): ParametersDefaultStateType => {
	const { items, maxId } = state;
	switch (action.type) {
		case "parametersReducer/addParameterItem":
			const { data } = action;
			const newId: number = maxId + 1;
			data.id = newId;
			data.createDatetime = '2021-06-06';
			return { ...state, items: [ data, ...items ], maxId: newId };
		case "parametersReducer/deleteParameterItem":
			const { id } = action;
			const itemsCopy = [ ...items ];
			const indexDeletingItem = itemsCopy.findIndex(itemCopy => itemCopy.id === id);
			itemsCopy.splice(indexDeletingItem, 1);
			debugger
			return { ...state, items: itemsCopy };
		default:
			return state;
	}
}