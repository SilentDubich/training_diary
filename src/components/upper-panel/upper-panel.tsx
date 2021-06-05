import React, {FC} from "react";
import StylesUpperPanel from "./upper-panel.module.css";


export const UpperPanel: FC<any> = props => {
	return (
		<div className={StylesUpperPanel.upper_panel}></div>
	)
}