import React, {FC} from "react";
import Styles from "./upper-panel.module.css";


export const UpperPanel: FC<any> = props => {
	return (
		<div className={Styles.upper_panel}>
			<div className={Styles.enter}>Войти</div>
		</div>
	)
}