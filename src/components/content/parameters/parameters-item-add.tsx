import React, {ComponentType, FC, useState} from "react";
import Styles from "./parameters-item-add.module.css"
import {ReusableInput} from "../../reusable/reusable-input";
import {ItemType} from "../../../data-base/reducers/parametersReducer";
import {compose} from "redux";
import {connect} from "react-redux";


type PropsType = {
	setIsAdd: (bool: boolean) => void,
	addParameterItemThunk: (data: ItemType) => void
}


export const ParametersItemAdd: FC<PropsType> = ({ setIsAdd, addParameterItemThunk }) => {
	let [ weight, setWeight ] = useState<number>(0);
	let [ percentFat, setPercentFat ] = useState<number>(0);
	let [ percentMuscles, setPercentMuscles ] = useState<number>(0);
	let [ percentWater, setPercentWater ] = useState<number>(0);
	let [ widthBelly, setWidthBelly ] = useState<number>(0);
	let [ widthNeck, setWidthNeck ] = useState<number>(0);
	let [ widthChest, setWidthChest ] = useState<number>(0);
	let [ widthWaist, setWidthWaist ] = useState<number>(0);
	let [ widthForearm, setWidthForearm ] = useState<number>(0);
	let [ widthBiceps, setWidthBiceps ] = useState<number>(0);
	let [ widthHip, setWidthHip ] = useState<number>(0);
	let [ widthCaviar, setWidthCaviar ] = useState<number>(0);
	const saveParameters = () => {
		const data: ItemType = {
			weight,
			percentFat,
			percentMuscles,
			percentWater,
			widthBelly,
			widthNeck,
			widthChest,
			widthWaist,
			widthForearm,
			widthBiceps,
			widthHip,
			widthCaviar
		}
		addParameterItemThunk(data);
		setIsAdd(false);
	}
	return (
		<div className={`${ Styles.container }`}>
			<div className={`${ Styles.header }`}>
				<div className={`${ Styles.header_title }`}>Добавить измерение:</div>
				<div className={`${ Styles.header_close }`} onClick={() => setIsAdd(false)}>X</div>
			</div>
			<div className={`${ Styles.content }`}>
				<div className={`${ Styles.parameters }`}>
					<div className={`${ Styles.parameter }`}>
						<div className={`${ Styles.parameter_title }`}>Вес:</div>
						<ReusableInput value={weight} updateValue={setWeight} type={'number'}/>
					</div>
					<div className={`${ Styles.parameter }`}>
						<div className={`${ Styles.parameter_title }`}>Жир(%):</div>
						<ReusableInput value={percentFat} updateValue={setPercentFat} type={'number'}/>
					</div>
					<div className={`${ Styles.parameter }`}>
						<div className={`${ Styles.parameter_title }`}>Мышцы(%):</div>
						<ReusableInput value={percentMuscles} updateValue={setPercentMuscles} type={'number'}/>
					</div>
					<div className={`${ Styles.parameter }`}>
						<div className={`${ Styles.parameter_title }`}>Вода(%):</div>
						<ReusableInput value={percentWater} updateValue={setPercentWater} type={'number'}/>
					</div>
					<div className={`${ Styles.parameter }`}>
						<div className={`${ Styles.parameter_title }`}>Складка на животе(мм):</div>
						<ReusableInput value={widthBelly} updateValue={setWidthBelly} type={'number'}/>
					</div>
					<div className={`${ Styles.parameter }`}>
						<div className={`${ Styles.parameter_title }`}>Объем шеи(см):</div>
						<ReusableInput value={widthNeck} updateValue={setWidthNeck} type={'number'}/>
					</div>
					<div className={`${ Styles.parameter }`}>
						<div className={`${ Styles.parameter_title }`}>Объем груди(см):</div>
						<ReusableInput value={widthChest} updateValue={setWidthChest} type={'number'}/>
					</div>
					<div className={`${ Styles.parameter }`}>
						<div className={`${ Styles.parameter_title }`}>Ширина талии(см):</div>
						<ReusableInput value={widthWaist} updateValue={setWidthWaist} type={'number'}/>
					</div>
					<div className={`${ Styles.parameter }`}>
						<div className={`${ Styles.parameter_title }`}>Объем предплечья(см):</div>
						<ReusableInput value={widthForearm} updateValue={setWidthForearm} type={'number'}/>
					</div>
					<div className={`${ Styles.parameter }`}>
						<div className={`${ Styles.parameter_title }`}>Объем бицепса(см):</div>
						<ReusableInput value={widthBiceps} updateValue={setWidthBiceps} type={'number'}/>
					</div>
					<div className={`${ Styles.parameter }`}>
						<div className={`${ Styles.parameter_title }`}>Объем бедра(см):</div>
						<ReusableInput value={widthHip} updateValue={setWidthHip} type={'number'}/>
					</div>
					<div className={`${ Styles.parameter }`}>
						<div className={`${ Styles.parameter_title }`}>Объем икр(см):</div>
						<ReusableInput value={widthCaviar} updateValue={setWidthCaviar} type={'number'}/>
					</div>
				</div>
				<div className={`${ Styles.save }`}>
					<div className={`${ Styles.save_btn }`} onClick={saveParameters}>Сохранить</div>
				</div>
			</div>
		</div>
	)
}