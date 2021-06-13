import React, {FC, useState} from "react";
import Styles from "./parameters-item-add.module.css"
import {ReusableInput} from "../../reusable/reusable-input";


type PropsType = {
	setIsAdd: (bool: boolean) => void
}


export const ParametersItemAdd: FC<PropsType> = props => {
	const { setIsAdd } = props;
	let [ weight, setWeight ] = useState<string>('0');
	return (
		<div className={`${ Styles.container }`}>
			<div className={`${ Styles.header }`}>
				<div className={`${ Styles.header_title }`}>Добавить измерение:</div>
				<div className={`${ Styles.header_close }`} onClick={() => setIsAdd(false)}>X</div>
			</div>
			<div className={`${ Styles.parameters }`}>
				<div className={`${ Styles.parameter }`}>
					<div className={`${ Styles.parameter_title }`}>Вес:</div>
					<ReusableInput value={weight} updateValue={setWeight} type={'number'}/>
				</div>
				<div className={`${ Styles.parameter }`}>
					<div className={`${ Styles.parameter_title }`}>Вес:</div>
					<ReusableInput value={weight} updateValue={setWeight} type={'number'}/>
				</div>
				<div className={`${ Styles.parameter }`}>
					<div className={`${ Styles.parameter_title }`}>Вес:</div>
					<ReusableInput value={weight} updateValue={setWeight} type={'number'}/>
				</div>
				<div className={`${ Styles.parameter }`}>
					<div className={`${ Styles.parameter_title }`}>Вес:</div>
					<ReusableInput value={weight} updateValue={setWeight} type={'number'}/>
				</div>
				<div className={`${ Styles.parameter }`}>
					<div className={`${ Styles.parameter_title }`}>Вес:</div>
					<ReusableInput value={weight} updateValue={setWeight} type={'number'}/>
				</div>
				<div className={`${ Styles.parameter }`}>
					<div className={`${ Styles.parameter_title }`}>Вес:</div>
					<ReusableInput value={weight} updateValue={setWeight} type={'number'}/>
				</div>
				<div className={`${ Styles.parameter }`}>
					<div className={`${ Styles.parameter_title }`}>Вес:</div>
					<ReusableInput value={weight} updateValue={setWeight} type={'number'}/>
				</div>
				<div className={`${ Styles.parameter }`}>
					<div className={`${ Styles.parameter_title }`}>Вес:</div>
					<ReusableInput value={weight} updateValue={setWeight} type={'number'}/>
				</div>
			</div>
		</div>
	)
}