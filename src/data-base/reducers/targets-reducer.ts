import {AppStateType, InferActionsTypes} from "../store";
import {ThunkAction} from "redux-thunk";

export type TargetType = {
	id: number,
	title: string,
	endDate: string,
	isCompleted: boolean
}


export const targetsActions = {
	addTargetItem: (data: TargetType) => ({ type: 'targetsReducer/addTarget', data } as const),
	editParameterItem: (data: TargetType) => ({ type: 'targetsReducer/editTarget', data } as const),
	deleteTargetItem: (id: number) => ({ type: 'targetsReducer/deleteTarget', id } as const)
};

type TargetsActionType = InferActionsTypes<typeof targetsActions>;
export type TargetsThunkType = ThunkAction<Promise<void>, AppStateType, unknown, TargetsActionType>;


export const addTargetThunk = (data: TargetType, mode: 'EDIT' | 'ADD'): TargetsThunkType => {
	return async (dispatch) => {
		if (mode === 'ADD') dispatch(targetsActions.addTargetItem(data));
		else if (mode === 'EDIT') dispatch(targetsActions.editParameterItem(data));
	}
};

export const deleteTargetThunk = (id: number): TargetsThunkType => {
	return async (dispatch) => {
		dispatch(targetsActions.deleteTargetItem(id));
	}
};


const targetsDefaultState = {
	items: [
		{
			id: 1,
			title: 'Похудеть на 5 кг',
			endDate: '2022-05-18',
			isCompleted: false
		},
		{
			id: 2,
			title: 'Похудеть на 5 кг',
			endDate: '2022-05-18',
			isCompleted: false
		},
		{
			id: 3,
			title: 'Похудеть на 5 кг',
			endDate: '2022-05-18',
			isCompleted: false
		},
		{
			id: 4,
			title: 'Похудеть на 5 кг',
			endDate: '2022-05-18',
			isCompleted: false
		},
		{
			id: 5,
			title: 'Похудеть на 5 кг',
			endDate: '2022-05-18',
			isCompleted: false
		},
		{
			id: 6,
			title: 'Похудеть на 5 кг',
			endDate: '2022-05-18',
			isCompleted: false
		},
		{
			id: 7,
			title: 'Похудеть на 5 кг',
			endDate: '2022-05-18',
			isCompleted: false
		}
	] as Array<TargetType>,
	maxId: 7
};

type TargetsDefaultStateType = typeof targetsDefaultState;


export const targetsReducer = (state = targetsDefaultState, action: TargetsActionType): TargetsDefaultStateType => {
	const { items, maxId } = state;
	const itemsCopy = [ ...items ];
	switch (action.type) {
		case "targetsReducer/addTarget":
			if (true) {
				const { data } = action;
				const newId: number = maxId + 1;
				data.id = newId;
				return { ...state, items: [ data, ...items ], maxId: newId };
			}
		case "targetsReducer/deleteTarget":
			const { id } = action;
			const indexDeletingItem = itemsCopy.findIndex(itemCopy => itemCopy.id === id);
			itemsCopy.splice(indexDeletingItem, 1);
			return { ...state, items: itemsCopy };
		case "targetsReducer/editTarget":
			if (true) {
				const { data } = action;
				const indexEditableParameter = itemsCopy.findIndex(itemCopy => itemCopy.id === data.id);
				if (indexEditableParameter !== -1) itemsCopy[indexEditableParameter] = data;
				return { ...state, items: itemsCopy };
			}
		default:
			return state;
	}
}