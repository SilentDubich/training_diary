import React, {DetailedHTMLProps, FC, FormEventHandler, InputHTMLAttributes} from "react";
import Styles from "./reusable-input.module.css";

type PropsType = {
	value: number | string,
	updateValue: (value: any) => void,
	type: string
};

export const ReusableInput: FC<PropsType> = ({ updateValue, value, type }) => {
	const ref = React.createRef<HTMLInputElement>();
	const changeValue = () => {
		let value: string | undefined | number = ref.current?.value;
		const isNumberType = type === 'number';
		// if (!value) value = isNumberType ? 0 : '';
		if (isNumberType) value = value && +value;
		updateValue(value);
	}
	return (
		<input className={`${ Styles.container }`} type={type} value={value} onInput={changeValue} ref={ref}/>
	)
}