import React, {FC} from "react";
import Styles from "./parameters.module.css"
import {ParametersItem} from "./parameters-item";



export const Parameters: FC<any> = props => {
	return (
		<div>
			<div className={Styles.header}>
				<div className={Styles.header_title}>Мои измерения</div>
				<div className={Styles.header_add}>Добавить измерение</div>
			</div>
			<div className={Styles.items}>
				<ParametersItem/>
				<ParametersItem/>
				<ParametersItem/>
				{/*<ParametersItem/>*/}
				{/*<ParametersItem/>*/}
				{/*<ParametersItem/>*/}
				{/*<ParametersItem/>*/}
				{/*<ParametersItem/>*/}
				{/*<ParametersItem/>*/}
				{/*<ParametersItem/>*/}
				{/*<ParametersItem/>*/}
				{/*<ParametersItem/>*/}
				{/*<ParametersItem/>*/}
				{/*<ParametersItem/>*/}
				{/*<ParametersItem/>*/}
				{/*<ParametersItem/>*/}
				{/*<ParametersItem/>*/}
				<ParametersItem/>
			</div>
		</div>
	)
}