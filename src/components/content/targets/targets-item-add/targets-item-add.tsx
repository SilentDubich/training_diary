import React, {FC, useState} from "react";
import Styles from "./targets-item-add.module.css";
import {TargetType} from "../../../../data-base/reducers/targets-reducer";
import {ReusableInput} from "../../../reusable/reusable-input/reusable-input";

type PropsType = {
	mode: 'ADD' | 'EDIT',
	setIsAdd: (bool: boolean) => void,
	addTargetThunk: (data: TargetType, mode: 'ADD' | 'EDIT') => void,
	data?: TargetType
}


export const TargetsItemAdd:FC<PropsType> = ({ mode, setIsAdd, data, addTargetThunk }) => {
	const isEditMode = mode === 'EDIT';
	let [ title, setTitle ] = useState<string>(data && data.title ? data.title : '');
	let [ endDate, setEndDate ] = useState<string>(data && data.endDate ? data.endDate : '');
	const getParameters = () => {
		const id = data && data.id ? data.id : -Infinity;
		const endDate = data && data.endDate ? data.endDate : '1970-01-01';
		const dataToSend: TargetType = {
			id,
			endDate,
			title,
			isCompleted: false
		};
		return dataToSend;
	}
	const saveParameters = () => {
		const data: TargetType = getParameters();
		addTargetThunk(data, mode);
		setIsAdd(false);
	}
	return (
		<div className={`${ Styles.container }`}>
			<div className={`${ Styles.header }`}>
				<div className={`${ Styles.header_title }`}>{isEditMode ? 'Изменить цель:' : 'Добавить цель:'}</div>
				<div className={`${ Styles.header_close }`} onClick={() => setIsAdd(false)}>X</div>
			</div>
			<div className={`${ Styles.content }`}>
				<div className={`${ Styles.targets }`}>
					<div className={`${ Styles.target }`}>
						<div className={`${ Styles.target_title }`}>Цель:</div>
						<ReusableInput value={title} updateValue={setTitle} type={'text'} />
					</div>
				</div>
				<div className={`${ Styles.save }`}>
					<div className={`${ Styles.save_btn }`} onClick={saveParameters}>Сохранить</div>
				</div>
			</div>
		</div>
	)
}