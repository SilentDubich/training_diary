import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import Styles from './reusable-input-date-time.module.css';


type PropsType = {

};


export const ReusableInputDateTime: FC<PropsType> = ({}) => {
	const [ day, setDay ] = useState<number>(1);
	const [ dayCount, setDayCount ] = useState<number>(31);

	const [ month, setMonth ] = useState<number>(1);
	const monthCount = 12;

	const yearCount: number = 25;
	const currentYear: number = new Date().getFullYear();
	const minYear: number = currentYear - yearCount;
	const maxYear: number = currentYear + yearCount;
	const [ year, setYear ] = useState<number>(currentYear);

	const [ editDay, setEditDay ] = useState<boolean>(false);
	const [ editMonth, setEditMonth ] = useState<boolean>(false);
	const [ editYear, setEditYear ] = useState<boolean>(false);

	const dayItems: Array<JSX.Element> = [];
	const monthItems: Array<JSX.Element> = [];
	const yearItems: Array<JSX.Element> = [];

	const months: Array<string> = [
		'',
		'Январь',
		'Февраль',
		'Март',
		'Апрель',
		'Май',
		'Июнь',
		'Июль',
		'Август',
		'Сентябрь',
		'Октябрь',
		'Ноябрь',
		'Декабрь'
	];

	for (let count = 1; count <= dayCount; count++) dayItems.push(<div key={count} className={Styles.item} onClick={() => setValue(count, setDay, setEditDay)}>{count}</div>);
	for (let count = 1; count <= monthCount; count++) monthItems.push(<div key={count} className={Styles.item} onClick={() => setValue(count, setMonth, setEditMonth, 'month')}>{months[count]}</div>);
	for (let count = minYear; count <= maxYear; count++) yearItems.push(<div key={count} className={Styles.item} onClick={() => setValue(count, setYear, setEditYear, 'year')}>{count}</div>);

	const setValue = (value: number, callback: Dispatch<SetStateAction<number>>, editState: (bool: boolean) => void, type?: 'day' | 'month' | 'year') => {
		callback(value);
		editState(false);
		const isMonth = type === 'month';
		const isYear = type === 'year';
		const daysInMonth = new Date(isYear ? value : year, isMonth ? value : month, 0).getDate();
		setDayCount(daysInMonth);
		if (daysInMonth < dayCount) setDay(daysInMonth);
	};

	const setEdit = (value: boolean, type: 'day' | 'month' | 'year', editState: (bool: boolean) => void) => {
		if (type !== 'day') setEditDay(false);
		if (type !== 'month') setEditMonth(false);
		if (type !== 'year') setEditYear(false);
		editState(value);
	};
	return (
		<div className={Styles.date_container}>
			<div className={Styles.day_container}>
				<div className={Styles.item} onClick={() => setEdit(!editDay, 'day', setEditDay)}>{ day ? day : 'День'}</div>
				{ editDay && <div className={Styles.items}>{ dayItems }</div> }
			</div>
			<div className={Styles.month_container}>
				<div className={Styles.item} onClick={() => setEdit(!editMonth, 'month', setEditMonth)}>{ month ? months[month] : 'Месяц'}</div>
				{ editMonth && <div className={Styles.items}>{ monthItems }</div> }
			</div>
			<div className={Styles.year_container}>
				<div className={Styles.item} onClick={() => setEdit(!editYear, 'year', setEditYear)}>{ year ? year : 'Год'}</div>
				{ editYear && <div className={Styles.items}>{ yearItems }</div> }
			</div>
		</div>
	)
}