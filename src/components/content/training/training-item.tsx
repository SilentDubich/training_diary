import React, {FC} from "react";
import {TrainingType} from "../../../data-base/reducers/training-reducer";


type PropsType = {
	training: TrainingType
};

export const TrainingItem:FC<PropsType> = ({ training }) => {
	const { id, approaches, datetime, description, title } = training;
	return (
		<div>Hello</div>
	)
}