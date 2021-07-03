import React from 'react';
import './App.module.css';
import {Navigation} from "./components/navigation/navigation";
import {Content} from "./components/content/content";
import {UpperPanel} from "./components/upper-panel/upper-panel";
import StylesApp from "./App.module.css"

declare global {
	interface Window {
		closeFunctions: Array<{ callback: (bool: boolean) => void, elemIds: Array<string> }>;
	}
}

export const App = () => {
	if (!window.closeFunctions || !window.closeFunctions.length) window.closeFunctions = [];
	window.addEventListener('click', (e: MouseEvent) => {
		const closeFunctions = window.closeFunctions;
		if (!closeFunctions.length) return;
		closeFunctions.forEach(closeFunction => {
			const { callback, elemIds } = closeFunction;
			let isAnyClicked: boolean = false;
			const path: Array<EventTarget> = e.composedPath();
			elemIds.forEach(elemId => {
				const elems = [ ...document.querySelectorAll(`#${ elemId }`) ];
				elems.forEach(elem => {
					if (path.includes(elem)) isAnyClicked = true;
				});
			});
			if (isAnyClicked) return;
			callback(false);
		});
	});
	return (
		<div>
			<UpperPanel/>
			<div className={StylesApp.navigation_content_container}>
			  <Navigation/>
			  <Content/>
			</div>
		</div>
	)
};
