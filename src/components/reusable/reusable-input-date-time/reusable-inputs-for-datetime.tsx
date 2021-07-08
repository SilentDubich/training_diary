import React, {Dispatch, FC, SetStateAction, useState} from 'react';
// import Styles from './reusable-input-date-time.module.css';
//
//
//
// type PropsType = {
// 	firstTitle: string,
// 	secondTitle: string,
// 	thirdTitle: string,
// 	defaultFirstTitle: string,
// 	defaultSecondTitle: string,
// 	defaultThirdTitle: string,
// 	firstCount: number,
// 	secondCount: number,
// 	thirdCount: number,
// 	minThirdCount: number,
// 	setValue: (value: number, callback: Dispatch<SetStateAction<number>>, editState: (bool: boolean) => void, type: string) => void
// };
//
// export const ReusableInputsForDatetime: FC<PropsType> = (
// 	{
// 		firstTitle,
// 		secondTitle,
// 		thirdTitle,
// 		defaultFirstTitle,
// 		defaultSecondTitle,
// 		defaultThirdTitle,
// 		firstCount,
// 		secondCount,
// 		thirdCount,
// 		minThirdCount,
// 		setValue
// 	}
// ) => {
// 	const [ editFirst, setEditFirst ] = useState<boolean>(false);
// 	const [ editSecond, setEditSecond ] = useState<boolean>(false);
// 	const [ editThird, setEditThird ] = useState<boolean>(false);
//
//
// 	const setEdit = (value: boolean, type: 'first' | 'second' | 'third', editState: (bool: boolean) => void) => {
// 		if (type !== 'first') setEditFirst(false);
// 		if (type !== 'second') setEditSecond(false);
// 		if (type !== 'third') setEditThird(false);
// 		editState(value);
// 	};
//
// 	const firstItems: Array<JSX.Element> = [];
// 	const monthItems: Array<JSX.Element> = [];
// 	const yearItems: Array<JSX.Element> = [];
//
// 	for (let count = 1; count <= firstCount; count++) firstItems.push(<div key={count} className={Styles.item} onClick={() => setValue(count, setDay, setEditDay, 'day')}>{count}</div>);
// 	for (let count = 1; count <= secondCount; count++) monthItems.push(<div key={count} className={Styles.item} onClick={() => setValue(count, setMonth, setEditMonth, 'month')}>{months[count]}</div>);
// 	for (let count = minThirdCount; count <= thirdCount; count++) yearItems.push(<div key={count} className={Styles.item} onClick={() => setValue(count, setYear, setEditYear, 'year')}>{count}</div>);
//
// 	return (
// 		<>
// 			<div className={Styles.day_container}>
// 				<div className={Styles.item} onClick={() => setEdit(!editFirst, 'first', setEditFirst)}>{ firstTitle ? firstTitle : defaultFirstTitle }</div>
// 				{ editFirst && <div className={Styles.items}>{ firstItems }</div> }
// 			</div>
// 			<div className={Styles.month_container}>
// 				<div className={Styles.item} onClick={() => setEdit(!editSecond, 'second', setEditSecond)}>{ secondTitle ? secondTitle : defaultSecondTitle }</div>
// 				{ editSecond && <div className={Styles.items}>{ monthItems }</div> }
// 			</div>
// 			<div className={Styles.year_container}>
// 				<div className={Styles.item} onClick={() => setEdit(!editThird, 'third', setEditThird)}>{ thirdTitle ? thirdTitle : defaultThirdTitle }</div>
// 				{ editThird && <div className={Styles.items}>{ yearItems }</div> }
// 			</div>
// 		</>
// 	)
// };