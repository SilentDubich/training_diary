import React, {FC, useEffect, useRef} from "react";
import { createPortal } from "react-dom";
import Styles from "./popup.module.css"

const modalRoot = document.querySelector('#root') as HTMLElement;

type PropsType = {
	isShowPopup?: (isShow: boolean) => void
}

export const Modal: FC<PropsType> = ({ isShowPopup, children }) => {
	const el = useRef(document.createElement('div'));

	useEffect(() => {
		// Use this in case CRA throws an error about react-hooks/exhaustive-deps
		const current = el.current;
		current.classList.add(Styles.popup_container, 'popup');
		current.addEventListener('click', (e: MouseEvent) => {
			const path: any = e.composedPath();
			const isClickedOnPopup = path[0].classList.contains('popup');
			if (isClickedOnPopup) isShowPopup && isShowPopup(false);
		});

		// We assume `modalRoot` exists with '!'
		modalRoot!.appendChild(current);
		return () => void modalRoot!.removeChild(current);
	}, []);

	return createPortal(children, el.current);
};