import React, {FC} from "react";
import Styles from "./parameters-item-add.module.css"


type PropsType = {
	setIsAdd: (bool: boolean) => void
}


export const ParametersItemAdd: FC<PropsType> = props => {
	const { setIsAdd } = props;
	return (
		<div className={`${ Styles.container }`} onClick={() => setIsAdd(false)}>Hello world</div>
	)
}