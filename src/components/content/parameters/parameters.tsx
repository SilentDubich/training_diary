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

const Parameters: FC<PropsType> = ({items}) => {
	const parametersItems = items.map(
		({
			 createDatetime,
			 weight,
			 percentFat,
			 percentMuscles,
			 percentWater,
			 widthBelly,
			 widthBiceps,
			 widthCaviar,
			 widthChest,
			 widthForearm,
			 widthHip,
			 widthNeck,
			 widthWaist
		}) => {
			return <ParametersItem
				createDatetime={createDatetime}
				weight={weight}
				percentFat={percentFat}
				percentMuscles={percentMuscles}
				percentWater={percentWater}
				widthBelly={widthBelly}
				widthBiceps={widthBiceps}
				widthCaviar={widthCaviar}
				widthChest={widthChest}
				widthForearm={widthForearm}
				widthHip={widthHip}
				widthNeck={widthNeck}
				widthWaist={widthWaist}
			/>
		}
	)
	return (
		<div>
			<div className={Styles.header}>
				<div className={Styles.header_title}>Мои измерения</div>
				<div className={Styles.header_add}>Добавить измерение</div>
			</div>
			<div className={Styles.items}>
				{parametersItems}
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