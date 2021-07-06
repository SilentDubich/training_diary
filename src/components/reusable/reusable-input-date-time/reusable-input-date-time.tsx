import React, {FC, useState} from 'react';
import Styles from './reusable-input-date-time.module.css';


type PropsType = {

};


export const ReusableInputDateTime: FC<PropsType> = ({}) => {
	const [ day, setDay ] = useState<number | null>(null);
	const [ dayCount, setDayCount ] = useState<number>(31);

	const [ month, setMonth ] = useState<number | null>(null);
	const monthCount = 12;

	const [ year, setYear ] = useState<number | null>(null);
	const yearCount: number = 25;
	const currentYear: number = new Date().getFullYear();
	const minYear: number = currentYear - yearCount;
	const maxYear: number = currentYear + yearCount;

	const [ editDay, setEditDay ] = useState<boolean>(false);
	const [ editMonth, setEditMonth ] = useState<boolean>(false);
	const [ editYear, setEditYear ] = useState<boolean>(false);

	const dayItems: Array<JSX.Element> = [];
	const monthItems: Array<JSX.Element> = [];
	const yearItems: Array<JSX.Element> = [];
	for (let count = 1; count <= dayCount; count++) dayItems.push(<div className={Styles.item}>{count}</div>);
	for (let count = 1; count <= monthCount; count++) monthItems.push(<div className={Styles.item}>{count}</div>);
	for (let count = minYear; count <= maxYear; count++) yearItems.push(<div className={Styles.item}>{count}</div>);
	return (
		<div>
			<div className={Styles.day_container}>
				<div onClick={() => setEditDay(!editDay)}>День</div>
				{ editDay && dayItems }
			</div>
			<div className={Styles.day_container}>
				<div onClick={() => setEditMonth(!editMonth)}>Месяц</div>
				{ editMonth && monthItems }
			</div>
			<div className={Styles.day_container}>
				<div onClick={() => setEditYear(!editMonth)}>Год</div>
				{ editYear && yearItems }
			</div>
		</div>
	)
}