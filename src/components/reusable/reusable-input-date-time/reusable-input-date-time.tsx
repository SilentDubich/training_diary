import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import Styles from './reusable-input-date-time.module.css';




type PropsType = {
	secValue: number,
	minValue: number,
	hourValue: number
};



export const ReusableInputTime: FC<PropsType> = ({ secValue, minValue, hourValue }) => {

	const [ sec, setSec ] = useState<number>(secValue ? secValue : 0);
	const [ min, setMin ] = useState<number>(minValue ? minValue : 0);
	const [ hour, setHour ] = useState<number>(hourValue ? hourValue : 0);

	const hourCount: number = 24;
	const minCount: number = 60;
	const secCount: number = 60;


	const [ editSec, setEditSec ] = useState<boolean>(false);
	const [ editMin, setEditMin ] = useState<boolean>(false);
	const [ editHour, setEditHour ] = useState<boolean>(false);

	const secItems: Array<JSX.Element> = [];
	const minItems: Array<JSX.Element> = [];
	const hourItems: Array<JSX.Element> = [];

	for (let count = 0; count <= secCount; count++) secItems.push(<div key={count} className={Styles.item} onClick={() => setValue(count, setSec, setEditSec, 'sec')}>{count}</div>);
	for (let count = 0; count <= minCount; count++) minItems.push(<div key={count} className={Styles.item} onClick={() => setValue(count, setMin, setEditMin, 'min')}>{count}</div>);
	for (let count = 0; count <= hourCount; count++) hourItems.push(<div key={count} className={Styles.item} onClick={() => setValue(count, setHour, setEditHour, 'hour')}>{count}</div>);



	const ref = React.createRef<HTMLDivElement>();

	const setValue = (value: number, callback: Dispatch<SetStateAction<number>>, editState: (bool: boolean) => void, type: 'sec' | 'min' | 'hour') => {
		callback(value);
		editState(false);
		const isSec = type === 'sec';
		const isMin = type === 'min';
		const isHour = type === 'hour';
		const secToSend = isSec ? value : sec;
		const minToSend = isMin ? value : min;
		const hourToSend = isHour ? value : hour;
		ref.current!.dispatchEvent(new CustomEvent('time changed', {
			bubbles: true,
			cancelable: true,
			composed: true,
			detail: { sec: secToSend, min: minToSend, hour: hourToSend }
		}));
	};

	const setEdit = (value: boolean, type: 'sec' | 'min' | 'hour', editState: (bool: boolean) => void) => {
		if (type !== 'sec') setEditSec(false);
		if (type !== 'min') setEditMin(false);
		if (type !== 'hour') setEditHour(false);
		editState(value);
	};

	return (
		<div ref={ref} className={Styles.date_container}>
			<div className={Styles.day_container}>
				<div className={Styles.item} onClick={() => setEdit(!editSec, 'sec', setEditSec)}>{ sec ? sec : 'Секунды'}</div>
				{ editSec && <div className={Styles.items}>{ secItems }</div> }
			</div>
			<div className={Styles.month_container}>
				<div className={Styles.item} onClick={() => setEdit(!editMin, 'min', setEditMin)}>{ min ? min : 'Минуты'}</div>
				{ editMin && <div className={Styles.items}>{ minItems }</div> }
			</div>
			<div className={Styles.year_container}>
				<div className={Styles.item} onClick={() => setEdit(!editHour, 'hour', setEditHour)}>{ hour ? hour : 'Часы'}</div>
				{ editHour && <div className={Styles.items}>{ hourItems }</div> }
			</div>
		</div>
	)
}