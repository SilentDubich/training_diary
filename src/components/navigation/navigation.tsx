import React, {FC} from "react";
import {NavLink} from "react-router-dom";
import Styles from "./navigation.module.css"


type PropsType = any;


export const Navigation: FC<PropsType> = props => {
	return (
		<div className={Styles.navigation_container}>
			<NavLink to={'/profile'} className={Styles.item}>Профиль</NavLink>
			<NavLink to={'/parameters'} className={Styles.item}>Измерения</NavLink>
			<NavLink to={'/training'} className={Styles.item}>Тренировки</NavLink>
			<NavLink to={'/targets'} className={Styles.item}>Цели</NavLink>
		</div>
	)
}