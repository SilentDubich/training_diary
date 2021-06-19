import React, {ComponentType, FC, useState} from "react";
import Styles from "../targets/targets.module.css";
import {Modal} from "../../popup";
import {AppStateType} from "../../../data-base/store";
import {compose} from "redux";
import {connect} from "react-redux";
import {addTargetThunk, deleteTargetThunk, TargetType} from "../../../data-base/reducers/targets-reducer";
import {TargetsItemAdd} from "./targets-item-add/targets-item-add";
import {TargetsItem} from "./targets-item";



type PropsType = {
	targets: Array<TargetType>,
	deleteTargetThunk: (id: number) => void,
	addTargetThunk: (data: TargetType) => void
}


export const Targets:FC<PropsType> = ({ targets, addTargetThunk, deleteTargetThunk }) => {
	let [ isAdd, setIsAdd ] = useState<boolean>(false);
	const targetEls = targets.map(target => <TargetsItem data={target} addTargetThunk={addTargetThunk} deleteTargetThunk={deleteTargetThunk}/>);
	return (
		<>
			<div className={Styles.header}>
				<div className={Styles.header_title}>Мои цели</div>
				<div className={Styles.header_add} onClick={() => setIsAdd(true)}>Добавить цель</div>
			</div>
			<div className={Styles.items}>
				{targets.length === 0 && <div className={Styles.empty_list}>Список пуст</div>}
				{targetEls}
			</div>
			{
				isAdd &&
				<Modal isShowPopup={setIsAdd}>
					<TargetsItemAdd setIsAdd={setIsAdd} />
				</Modal>
			}
		</>
	)
};

const mapStateToProps = (state: AppStateType) => {
	return {
		targets: state.targetsReducer.items
	}
};

export const TargetsContainer = compose<ComponentType>(
	connect(mapStateToProps, { addTargetThunk, deleteTargetThunk })
)(Targets);