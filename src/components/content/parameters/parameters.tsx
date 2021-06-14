import React, {ComponentType, FC, useState} from "react";
import Styles from "./parameters.module.css"
import {ParametersItem} from "./parameters-item";
import {AppStateType} from "../../../data-base/store";
import {compose} from "redux";
import {connect} from "react-redux";
import {addParameterItemThunk, deleteParameterItemThunk, ItemType} from "../../../data-base/reducers/parametersReducer";
import {Modal} from "../../popup";
import {ParametersItemAdd} from "./parameters-item-add";


type PropsType = {
	items: Array<ItemType>,
	addParameterItemThunk: (data: ItemType) => void,
	deleteParameterItemThunk: (id: number) => void
}

const Parameters: FC<PropsType> = ({items, addParameterItemThunk, deleteParameterItemThunk}) => {
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
				deleteParameterItemThunk={deleteParameterItemThunk}
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
	);
	let [ isAdd, setIsAdd ] = useState<boolean>(false);
	return (
		<>
			<div className={Styles.header}>
				<div className={Styles.header_title}>Мои измерения</div>
				<div className={Styles.header_add} onClick={() => setIsAdd(true)}>Добавить измерение</div>
			</div>
			<div className={Styles.items}>
				{parametersItems.length === 0 && <div className={Styles.empty_list}>Список пуст</div>}
				{parametersItems}
			</div>
			{
				isAdd &&
				<Modal isShowPopup={setIsAdd}>
					<ParametersItemAdd addParameterItemThunk={addParameterItemThunk} setIsAdd={setIsAdd}/>
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
	connect(mapStateToProps, { addParameterItemThunk, deleteParameterItemThunk })
)(Parameters)