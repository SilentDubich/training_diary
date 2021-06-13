import React, {FC} from "react";
import Styles from "./parameters-item-add.module.css"


type PropsType = {
	setIsAdd: (bool: boolean) => void
}


export const ParametersItemAdd: FC<PropsType> = props => {
	const { setIsAdd } = props;
	return (
		<div className={`${ Styles.container }`}>
			<div className={`${ Styles.header }`}>
				<div className={`${ Styles.header_title }`}>Добавить измерение:</div>
				<div className={`${ Styles.header_close }`} onClick={() => setIsAdd(false)}>X</div>
			</div>
		</div>
	)
}