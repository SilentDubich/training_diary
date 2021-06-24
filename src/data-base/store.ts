import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import {parametersReducer} from "./reducers/parameters-reducer";
import {targetsReducer} from "./reducers/targets-reducer";
import {trainingReducer} from "./reducers/training-reducer";

const allReduces = combineReducers(
	{
		parametersReducer,
		targetsReducer,
		trainingReducer
	}
);

type AllReducersType = typeof allReduces;
export type AppStateType = ReturnType<AllReducersType>;

type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never;
export type InferActionsTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesTypes<T>>;

export const store = createStore(allReduces, applyMiddleware(thunkMiddleware));


// @ts-ignore
window.store = store;