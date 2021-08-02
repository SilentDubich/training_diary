import {AppStateType, InferActionsTypes} from "../store";
import {ThunkAction} from "redux-thunk";
import {api} from '../api';


export type UserType = {
	id: number
};

export const userActions = {
	setUser: (data: UserType) => ({ type: 'userReducer/setUser', data } as const),
};

type UserActionType = InferActionsTypes<typeof userActions>;
export type UserThunkType = ThunkAction<Promise<void>, AppStateType, unknown, UserActionType>;


export const getUserThunk = (): UserThunkType => {
	return async (dispatch) => {
		// const data: UserType = await api.getUserDate();
		// dispatch(userActions.setUser(data));
	}
};

const userDefaultState = {} as UserType;

type UserDefaultStateType = typeof userDefaultState;

export const trainingReducer = (state = userDefaultState, action: UserActionType): UserDefaultStateType => {
	switch (action.type) {
		case 'userReducer/setUser':
			return { ...action.data };
		default:
			return state;
	}
}