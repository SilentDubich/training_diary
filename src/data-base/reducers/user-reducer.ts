import {AppStateType, InferActionsTypes} from "../store";
import {ThunkAction} from "redux-thunk";


export type UserType = {
	id: number
};

export const userActions = {
	setUser: (data: UserType) => ({ type: 'userReducer/setUser', data } as const),
};

type UserActionType = InferActionsTypes<typeof userActions>;
export type UserThunkType = ThunkAction<Promise<void>, AppStateType, unknown, UserActionType>;


export const setUserThunk = (data: UserType): UserThunkType => {
	return async (dispatch) => {
		dispatch(userActions.setUser(data));
	}
};

const usersDefaultState = {
	items: [] as Array<UserType>
}

type UsersDefaultStateType = typeof usersDefaultState;

export const trainingReducer = (state = usersDefaultState, action: UserActionType): UsersDefaultStateType => {
	const { items } = state;
	const itemsCopy = [ ...items ];
	switch (action.type) {
		default:
			return state;
	}
}