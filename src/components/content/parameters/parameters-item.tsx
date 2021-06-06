import React, {ComponentType, FC} from "react";
import Styles from "./parameters-item.module.css"
import { ItemType } from "../../../data-base/reducers/parametersReducer";

export const ParametersItem: FC<ItemType> = ({ createDatetime, weight, percentFat, percentMuscles }) => {
	const muscles: number = +(weight * (percentMuscles / 100)).toFixed(1);
	const fat: number = +(weight * (percentFat / 100)).toFixed(1);
	return (
		<div className={Styles.container}>
			<div className={Styles.parameter}>
				<div className={Styles.parameter_title}>Дата измерения:</div>
				<div>{ createDatetime }</div>
			</div>
			<div className={Styles.parameters}>
				<div className={Styles.parameter}>
					<div className={Styles.parameter_title}>Вес(кг):</div>
					<div>{ weight };</div>
				</div>
				<div className={Styles.parameter}>
					<div className={Styles.parameter_title}>Жир(%):</div>
					<div>{ percentFat };</div>
				</div>
				<div className={Styles.parameter}>
					<div className={Styles.parameter_title}>Жир(кг):</div>
					<div>{ fat };</div>
				</div>
				<div className={Styles.parameter}>
					<div className={Styles.parameter_title}>Мышцы(%):</div>
					<div>{ percentMuscles };</div>
				</div>
				<div className={Styles.parameter}>
					<div className={Styles.parameter_title}>Мышцы(кг):</div>
					<div>{ muscles };</div>
				</div>
			</div>
		</div>
	)
}