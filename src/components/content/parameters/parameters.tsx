import React, {ComponentType, FC, useState} from "react";
import Styles from "./parameters.module.css"
import {ParametersItem} from "./parameters-item";
import {AppStateType} from "../../../data-base/store";
import {compose} from "redux";
import {connect} from "react-redux";
import {ItemType} from "../../../data-base/reducers/parametersReducer";
import {Modal} from "../../popup";
import {ParametersItemAdd} from "./parameters-item-add";


type PropsType = {
	items: Array<ItemType>
}

const Parameters: FC<PropsType> = ({items}) => {
	const parametersItems = items.map(
		({
			 id,
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
				key={id}
				id={id}
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
	let [ isAdd, setIsAdd ] = useState<boolean>(false);
	return (
		<>
			<div className={Styles.header}>
				<div className={Styles.header_title}>Мои измерения</div>
				<div className={Styles.header_add} onClick={() => setIsAdd(true)}>Добавить измерение</div>
			</div>
			<div className={Styles.items}>
				{parametersItems}
			</div>
			{
				isAdd &&
				<Modal isShowPopup={setIsAdd}>
					<ParametersItemAdd setIsAdd={setIsAdd}/>
				</Modal>
			}

		</>
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