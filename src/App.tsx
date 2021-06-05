import React from 'react';
import './App.module.css';
import {Navigation} from "./components/navigation/navigation";
import {Content} from "./components/content/content";
import {UpperPanel} from "./components/upper-panel/upper-panel";
import StylesApp from "./App.module.css"

export const App = () => {
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
