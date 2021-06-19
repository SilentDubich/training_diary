import React, {FC} from "react";
import {TargetType} from "../../../data-base/reducers/targets-reducer";
import {declinationNumber} from "../../../data-base/reusable-functions";
import Styles from "./targets-item.module.css";


type PropsType = {
	data: TargetType,
	deleteTargetThunk: (id: number) => void,
	addTargetThunk: (data: TargetType) => void
}

export const TargetsItem:FC<PropsType> = ({ data, addTargetThunk, deleteTargetThunk }) => {
	const { id, title, endDate, isCompleted } = data;
	const dateNow: Date = new Date();
	const currentYear: number = dateNow.getFullYear();
	const currentMonth: number = dateNow.getMonth() + 1;
	const currentDay: number = dateNow.getDate();
	const [ endYear, endMonth, endDay ]: Array<string> = endDate.split('-');
	let isDeadlineReached: boolean = false;
	let diffYear = +endYear - currentYear;
	if (diffYear < 0) isDeadlineReached = true;
	let diffMonth = +endMonth - currentMonth;
	if (diffMonth < 0) {
		diffYear--;
		diffMonth = 12 + diffMonth;
	}
	const diffDay = Math.abs(+endDay - currentDay);
	const dayText: string = diffDay ? declinationNumber(diffDay, [ 'день', 'дня', 'дней' ]) : '';
	const monthText: string = diffMonth ? declinationNumber(diffMonth, [ 'месяц', 'месяца', 'месяцев' ]) : '';
	const yearText: string = diffYear ? declinationNumber(diffYear, [ 'год', 'года', 'лет' ]) : '';
	const deadLineText: string = `До конца срока осталось: ${ diffDay ? diffDay : '' } ${ dayText } ${ diffMonth ? diffMonth : '' } ${ monthText } ${ diffYear ? diffYear : '' } ${ yearText }`;
	return (
		<>
			<div className={Styles.container} onClick={() => null}>
				<div className={Styles.target}>
					<div className={Styles.parameter_title}>Конечная дата:</div>
					<div className={Styles.datetime}>{ endDate }</div>
					<div className={Styles.delete} onClick={() => deleteTargetThunk(id)}>Удалить</div>
				</div>
				<div className={Styles.targets}>
					<div className={Styles.parameter}>
						<div className={Styles.parameter_title}>Цель:</div>
						<div>{ title }</div>
					</div>
				</div>
			</div>
			{/*{*/}
			{/*	isEdit &&*/}
			{/*	<Modal isShowPopup={setIsEdit}>*/}
			{/*		<ParametersItemAdd addParameterItemThunk={addParameterItemThunk} setIsAdd={setIsEdit} mode={"EDIT"} data={data}/>*/}
			{/*	</Modal>*/}
			{/*}*/}
		</>
	)
}