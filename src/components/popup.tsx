import React, {FC, useEffect, useRef} from "react";
import { createPortal } from "react-dom";
import Styles from "./popup.module.css"

const modalRoot = document.querySelector('#root') as HTMLElement;

type PropsType = {
	isShowPopup?: (isShow: boolean) => void
}

export const Modal: FC<PropsType> = ({ children }) => {
	const el = useRef(document.createElement('div'));

	useEffect(() => {
		// Use this in case CRA throws an error about react-hooks/exhaustive-deps
		const current = el.current;
		current.classList.add(Styles.popup_container);

		// We assume `modalRoot` exists with '!'
		modalRoot!.appendChild(current);
		return () => void modalRoot!.removeChild(current);
	}, []);

	return createPortal(children, el.current);
};