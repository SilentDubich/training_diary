import React, {FC} from "react";
import {Redirect, Route, Switch } from "react-router-dom";
import Styles from "./content.module.css"
import {Profile} from "./profile/profile";
import {ParametersContainer} from "./parameters/parameters";
import {TargetsContainer} from "./targets/targets";



type PropsType = any;

export const Content: FC<PropsType> = props => {
	const ProfileComponent = () => <Profile/>;
	const ParametersComponent = () => <ParametersContainer/>;
	const Training = () => <div>Training</div>;
	const TargetsComponents = () => <TargetsContainer/>;
	return (
		<div className={Styles.content_container}>
			<Switch>
				<Route path='/profile' render={ProfileComponent}/>
				<Route path='/parameters' render={ParametersComponent}/>
				<Route path='/training' render={Training}/>
				<Route path='/targets' render={TargetsComponents}/>
				<Redirect from="/" to="/profile"/>
			</Switch>
		</div>
	)
}