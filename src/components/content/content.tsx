import React, {FC} from "react";
import {Redirect, Route, Switch } from "react-router-dom";



type PropsType = any;

export const Content: FC<PropsType> = props => {
	const Profile = () => <div>Profile</div>;
	const Training = () => <div>Training</div>;
	const Targets = () => <div>Targets</div>;
	return (
		<div>
			<Switch>
				<Route path='/profile' render={Profile}/>
				<Route path='/training' render={Training}/>
				<Route path='/targets' render={Targets}/>
				<Redirect from="/" to="/profile"/>
			</Switch>
		</div>
	)
}