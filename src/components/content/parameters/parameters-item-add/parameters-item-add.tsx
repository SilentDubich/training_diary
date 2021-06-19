import React, {ComponentType, FC, useState} from "react";
import Styles from "./parameters-item-add.module.css"
import {ReusableInput} from "../../../reusable/reusable-input";
import {ItemType} from "../../../../data-base/reducers/parameters-reducer";


type PropsType = {
	setIsAdd: (bool: boolean) => void,
	addParameterItemThunk: (data: ItemType, mode: 'ADD' | 'EDIT') => void,
	mode: 'ADD' | 'EDIT',
	data?: ItemType
}


export const ParametersItemAdd: FC<PropsType> = ({ setIsAdd, addParameterItemThunk, mode, data }) => {
	let [ weight, setWeight ] = useState<number>(data && data.weight ? data.weight : 0);
	let [ percentFat, setPercentFat ] = useState<number>(data && data.percentFat ? data.percentFat : 0);
	let [ percentMuscles, setPercentMuscles ] = useState<number>(data && data.percentMuscles ? data.percentMuscles : 0);
	let [ percentWater, setPercentWater ] = useState<number>(data && data.percentWater ? data.percentWater : 0);
	let [ widthBelly, setWidthBelly ] = useState<number>(data && data.widthBelly ? data.widthBelly : 0);
	let [ widthNeck, setWidthNeck ] = useState<number>(data && data.widthNeck ? data.widthNeck : 0);
	let [ widthChest, setWidthChest ] = useState<number>(data && data.widthChest ? data.widthChest : 0);
	let [ widthWaist, setWidthWaist ] = useState<number>(data && data.widthWaist ? data.widthWaist : 0);
	let [ widthForearm, setWidthForearm ] = useState<number>(data && data.widthForearm ? data.widthForearm : 0);
	let [ widthBiceps, setWidthBiceps ] = useState<number>(data && data.widthBiceps ? data.widthBiceps : 0);
	let [ widthHip, setWidthHip ] = useState<number>(data && data.widthHip ? data.widthHip : 0);
	let [ widthCaviar, setWidthCaviar ] = useState<number>(data && data.widthCaviar ? data.widthCaviar : 0);
	const isEditMode = mode === 'EDIT';
	const getParameters = () => {
		const id = data && data.id ? data.id : -Infinity;
		const createDatetime = data && data.createDatetime ? data.createDatetime : '1970-01-01';
		const dataToSend: ItemType = {
			id,
			createDatetime,
			weight: weight || 0,
			percentFat: percentFat || 0,
			percentMuscles: percentMuscles || 0,
			percentWater: percentWater || 0,
			widthBelly: widthBelly || 0,
			widthNeck: widthNeck || 0,
			widthChest: widthChest || 0,
			widthWaist: widthWaist || 0,
			widthForearm: widthForearm || 0,
			widthBiceps: widthBiceps || 0,
			widthHip: widthHip || 0,
			widthCaviar: widthCaviar || 0
		};
		return dataToSend;
	}
	const saveParameters = () => {
		const data: ItemType = getParameters();
		addParameterItemThunk(data, mode);
		setIsAdd(false);
	}
	return (
		<div className={`${ Styles.container }`}>
			<div className={`${ Styles.header }`}>
				<div className={`${ Styles.header_title }`}>{isEditMode ? 'Изменить измерение:' : 'Добавить измерение:'}</div>
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