import React, {ComponentType, FC} from "react";
import Styles from "./parameters.module.css"
import {ParametersItem} from "./parameters-item";
import {AppStateType} from "../../../data-base/store";
import {compose} from "redux";
import {connect} from "react-redux";
import {ItemType} from "../../../data-base/reducers/parametersReducer";


type PropsType = {
	items: Array<ItemType>
}

const Parameters: FC<PropsType> = ({ items }) => {
	const parametersItems = items.map(
		({ createDatetime, weight, percentFat, percentMuscles }) => <ParametersItem createDatetime={createDatetime} weight={weight} percentFat={percentFat} percentMuscles={percentMuscles}/>
	)
	return (
		<div>
			<div className={Styles.header}>
				<div className={Styles.header_title}>Мои измерения</div>
				<div className={Styles.header_add}>Добавить измерение</div>
			</div>
			<div className={Styles.items}>
				{ parametersItems }
			</div>
		</div>
	)
}

const mapStateToProps = (state: AppStateType) => {
	return {
		items: state.parametersReducer.items
	}
}

export const ParametersContainer = compose<ComponentType>(
	connect(mapStateToProps, null)
)(Parameters)