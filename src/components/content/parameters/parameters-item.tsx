import React, {ComponentType, FC, useState} from "react";
import Styles from "./parameters-item.module.css"
import { ItemType } from "../../../data-base/reducers/parameters-reducer";
import {Modal} from "../../popup";
import {ParametersItemAdd} from "./parameters-item-add/parameters-item-add";


type PropsType = {
	deleteParameterItemThunk: (id: number) => void,
	addParameterItemThunk: (data: ItemType, mode: 'ADD' | 'EDIT') => void

}

export const ParametersItem: FC<ItemType & PropsType> = ({
	id,
	createDatetime,
	weight,
	percentFat,
	percentMuscles,
	percentWater,
	widthBelly,
	widthBiceps,
	widthCaviar,
	widthChest,
	widthForearm,
	widthHip,
	widthNeck,
	widthWaist,
	deleteParameterItemThunk,
	addParameterItemThunk
}) => {
	const muscles: number = weight && percentMuscles ? +(weight * (percentMuscles / 100)).toFixed(1) : 0;
	const fat: number = weight && percentFat ? +(weight * (percentFat / 100)).toFixed(1) : 0;
	let [ isEdit, setIsEdit ] = useState<boolean>(false);
	const data = {
		id,
		createDatetime,
		weight,
		percentFat,
		percentMuscles,
		percentWater,
		widthBelly,
		widthBiceps,
		widthCaviar,
		widthChest,
		widthForearm,
		widthHip,
		widthNeck,
		widthWaist
	}
	return (
		<>
			<div className={Styles.container} onClick={() => setIsEdit(true)}>
				<div className={Styles.parameter}>
					<div className={Styles.parameter_title}>Дата измерения:</div>
					<div className={Styles.datetime}>{ createDatetime }</div>
					<div className={Styles.delete} onClick={() => deleteParameterItemThunk(id)}>Удалить</div>
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
					<div className={Styles.parameter}>
						<div className={Styles.parameter_title}>Вода(%):</div>
						<div>{ percentWater };</div>
					</div>
					<div className={Styles.parameter}>
						<div className={Styles.parameter_title}>Складка на животе(мм):</div>
						<div>{ widthBelly };</div>
					</div>
					<div className={Styles.parameter}>
						<div className={Styles.parameter_title}>Объем бицепса(см):</div>
						<div>{ widthBiceps };</div>
					</div>
					<div className={Styles.parameter}>
						<div className={Styles.parameter_title}>Объем икр(см):</div>
						<div>{ widthCaviar };</div>
					</div>
					<div className={Styles.parameter}>
						<div className={Styles.parameter_title}>Объем груди(см):</div>
						<div>{ widthChest };</div>
					</div>
					<div className={Styles.parameter}>
						<div className={Styles.parameter_title}>Объем предплечья(см):</div>
						<div>{ widthForearm };</div>
					</div>
					<div className={Styles.parameter}>
						<div className={Styles.parameter_title}>Объем бедра(см):</div>
						<div>{ widthHip };</div>
					</div>
					<div className={Styles.parameter}>
						<div className={Styles.parameter_title}>Объем шеи(см):</div>
						<div>{ widthNeck };</div>
					</div>
					<div className={Styles.parameter}>
						<div className={Styles.parameter_title}>Ширина талии(см):</div>
						<div>{ widthWaist };</div>
					</div>
				</div>
			</div>
			{
				isEdit &&
				<Modal isShowPopup={setIsEdit}>
					<ParametersItemAdd addParameterItemThunk={addParameterItemThunk} setIsAdd={setIsEdit} mode={"EDIT"} data={data}/>
				</Modal>
			}
		</>
	)
}