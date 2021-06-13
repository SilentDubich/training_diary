import React, {DetailedHTMLProps, FC, FormEventHandler, InputHTMLAttributes} from "react";
import Styles from "./reusable-input.module.css";

type PropsType = {
	value: number | string,
	updateValue: (value: string) => void,
	type: string
};

export const ReusableInput: FC<PropsType> = ({ updateValue, value, type }) => {
	const ref = React.createRef<HTMLInputElement>();
	const changeValue = () => {
		let value = ref.current?.value;
		if (!value) value = '';
		updateValue(value);
		console.log(value)
	}
	return (
		<input className={`${ Styles.container }`} type={type} value={value} onInput={changeValue} ref={ref}/>
	)
}