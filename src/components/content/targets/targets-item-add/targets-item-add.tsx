import React, {FC} from "react";
import Styles from "./targets-item-add.module.css";




export const TargetsItemAdd:FC<any> = ({ mode, setIsAdd }) => {
	const isEditMode = mode === 'EDIT';
	return (
		<div className={`${ Styles.container }`}>
			<div className={`${ Styles.header }`}>
				<div className={`${ Styles.header_title }`}>{isEditMode ? 'Изменить цель:' : 'Добавить цель:'}</div>
				<div className={`${ Styles.header_close }`} onClick={() => setIsAdd(false)}>X</div>
			</div>
		</div>
	)
}