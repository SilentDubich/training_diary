import React, {FC} from "react";
import {NavLink} from "react-router-dom";
import Styles from "./navigation.module.css"


type PropsType = any;


export const Navigation: FC<PropsType> = props => {
	return (
		<div className={Styles.navigation_container}>
			<NavLink to={'/profile'}>Профиль</NavLink>
			<NavLink to={'/training'}>Тренировки</NavLink>
			<NavLink to={'/targets'}>Цели</NavLink>
		</div>
	)
}