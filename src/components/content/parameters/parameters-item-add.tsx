import React, {FC, useState} from "react";
import Styles from "./parameters-item-add.module.css"
import {ReusableInput} from "../../reusable/reusable-input";


type PropsType = {
	setIsAdd: (bool: boolean) => void
}


export const ParametersItemAdd: FC<PropsType> = props => {
	const { setIsAdd } = props;
	let [ weight, setWeight ] = useState<string>('0');
	let [ fat, setFat ] = useState<string>('0');
	let [ muscles, setMuscles ] = useState<string>('0');
	let [ water, setWater ] = useState<string>('0');
	let [ widthBelly, setWidthBelly ] = useState<string>('0');
	let [ widthNeck, setWidthNeck ] = useState<string>('0');
	let [ widthChest, setWidthChest ] = useState<string>('0');
	let [ widthWaist, setWidthWaist ] = useState<string>('0');
	let [ widthForearm, setWidthForearm ] = useState<string>('0');
	let [ widthBiceps, setWidthBiceps ] = useState<string>('0');
	let [ widthHip, setWidthHip ] = useState<string>('0');
	let [ widthCaviar, setWidthCaviar ] = useState<string>('0');
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
						<ReusableInput value={fat} updateValue={setFat} type={'number'}/>
					</div>
					<div className={`${ Styles.parameter }`}>
						<div className={`${ Styles.parameter_title }`}>Мышцы(%):</div>
						<ReusableInput value={muscles} updateValue={setMuscles} type={'number'}/>
					</div>
					<div className={`${ Styles.parameter }`}>
						<div className={`${ Styles.parameter_title }`}>Вода(%):</div>
						<ReusableInput value={water} updateValue={setWater} type={'number'}/>
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
					<div className={`${ Styles.save_btn }`}>Сохранить</div>
				</div>
			</div>
		</div>
	)
}